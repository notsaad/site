import React, { useState, useRef, useEffect } from "react";
import { InputContainer, InputWrapper, TextArea } from "./styled";
import { InputButton } from "./InputButton";

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
  placeholderValue: string;
}

export const InputArea: React.FC<InputAreaProps> = ({
  onSendMessage,
  isProcessing,
  placeholderValue,
}) => {
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus when processing is complete
  useEffect(() => {
    if (!isProcessing && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [isProcessing]);

  const handleSend = async () => {
    if (!inputValue.trim() || isProcessing) {
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
          ref={textAreaRef}
          placeholder={placeholderValue}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isProcessing}
        />
        <InputButton
          backgroundColour={
            inputValue.trim() && !isProcessing ? "#FFFFFF" : "#676767"
          }
          style={{ paddingRight: "100em" }}
          onClick={handleSend}
          disabled={isProcessing}
        />
      </InputWrapper>
    </InputContainer>
  );
};
