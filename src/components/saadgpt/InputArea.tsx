import React, { useState } from "react";
import { InputContainer, InputWrapper, TextArea } from "./styled";
import { InputButton } from "./InputButton";
import { callAPI } from "./api";

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

export const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isProcessing }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    if (!inputValue.trim() || isProcessing) {
      return;
    }
    try {
      const response = await callAPI();
      console.log("API response:", response);
    } catch (error) {
      console.error("Error calling API:", error);
      return;
    }
    onSendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <InputContainer>
      <InputWrapper>
        <TextArea
          placeholder="Ask anything about Saad..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isProcessing}
        />
        <InputButton
          backgroundColour={inputValue.trim() && !isProcessing ? "#FFFFFF" : "#676767"}
          style={{ paddingRight: "100em" }}
          onClick={handleSend}
          disabled={isProcessing}
        />
      </InputWrapper>
    </InputContainer>
  );
};
