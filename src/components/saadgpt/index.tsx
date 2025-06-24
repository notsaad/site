import React, { useState } from "react";
import { Container, MainContent } from "./styled";
import { Sidebar } from "./Sidebar";
import { InputArea } from "./InputArea";
import { Message } from "./Message";

interface MessageType {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const SaadGPT: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleNewMessage = async (message: string) => {
    if (!message.trim()) {
      return;
    }

    // Add user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);

    // Simulate processing delay and add bot response
    setTimeout(() => {
      const botMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: "test",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsProcessing(false);
    }, 1000);
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
            <h1 style={{ marginBottom: "2rem", fontWeight: 300}}>Where should we begin?</h1>
            <InputArea
              onSendMessage={handleNewMessage}
              isProcessing={isProcessing}
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
              }}
            >
              {messages.map((message) => (
                <Message
                  style={{
                    alignSelf: message.isUser ? "flex-end" : "flex-start",
                  }}
                  key={message.id}
                  content={message.content}
                  isUser={message.isUser}
                />
              ))}
              {isProcessing && <Message content="Typing..." isUser={false} />}
            </div>
            <InputArea
              onSendMessage={handleNewMessage}
              isProcessing={isProcessing}
            />
          </div>
        )}
      </MainContent>
    </Container>
  );
};
