import React, { useState } from "react";
import { Container, MainContent } from "./styled";
import { Sidebar } from "./Sidebar";
import { InputArea } from "./InputArea";

const handleNewMessage = () => {
  console.log("New message sent");
};

export const SaadGPT: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputArea
            onSendMessage={handleNewMessage}
            isProcessing={isProcessing}
          />
        </div>
      </MainContent>
    </Container>
  );
};
