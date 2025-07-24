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

    const apiResponse = await callAPI(userMessage.content);
    const botMessage: MessageType = {
      id: ++messageIDRef.current,
      content: apiResponse,
      isUser: false,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, botMessage]);
    setIsProcessing(false);
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
                padding: "20px 0",
                // margin: '',
                alignItems: 'space-evenly',
              }}
            >
              {messages.map((message) => (
                <Message
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
