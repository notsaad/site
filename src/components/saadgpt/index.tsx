import React, { useRef, useState } from "react";
import { Container, MainContent } from "./styled";
import { Sidebar } from "./Sidebar";
import { InputArea } from "./InputArea";
import { Message } from "./Message";
import { callAPI } from "./api";

interface MessageType {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const SaadGPT: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const messageIDRef = useRef(0);

  const handleNewMessage = async (message: string) => {
    if (!message.trim()) {
      return;
    }

    // Add user message
    const userMessage: MessageType = {
      id: ++messageIDRef.current,
      content: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);

    // Create bot message with empty content initially
    const botMessageId = ++messageIDRef.current;
    const botMessage: MessageType = {
      id: botMessageId,
      content: "",
      isUser: false,
      timestamp: new Date(),
    };

    // Add empty bot message to messages
    setMessages((prev) => [...prev, botMessage]);

    try {
      const responseStream = callAPI(userMessage.content);

      for await (const chunk of responseStream) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId
              ? { ...msg, content: msg.content + chunk }
              : msg,
          ),
        );
      }
    } catch (error) {
      // Handle error case
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                content: "Sorry, I encountered an error. Please try again.",
              }
            : msg,
        ),
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        {messages.length === 0 ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "#FFF",
            }}
          >
            <h1 style={{ marginBottom: "2rem", fontWeight: 300 }}>
              Where should we begin?
            </h1>
            <InputArea
              onSendMessage={handleNewMessage}
              isProcessing={isProcessing}
              placeholderValue="Ask anything about Saad..."
            />
          </div>
        ) : (
          <div style={{ display: "contents" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                padding: "20px 0",
                // margin: '',
                alignItems: "space-evenly",
              }}
            >
              {messages.map((message) => (
                <Message
                  key={message.id}
                  content={message.content}
                  isUser={message.isUser}
                />
              ))}
            </div>
            <InputArea
              onSendMessage={handleNewMessage}
              isProcessing={isProcessing}
              placeholderValue=""
            />
          </div>
        )}
      </MainContent>
    </Container>
  );
};
