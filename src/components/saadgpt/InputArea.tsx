import React, { useState } from "react";
import { InputContainer, InputWrapper, TextArea } from "./styled";
import { InputButton } from "./InputButton";

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

export const InputArea: React.FC<InputAreaProps> = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputContainer>
      <InputWrapper>
        <TextArea
          placeholder="Ask anything about Saad..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <InputButton backgroundColour={inputValue.trim() ? "#FFFFFF" : "#676767"} style={{paddingRight: '100em'}} />
      </InputWrapper>
    </InputContainer>
  );
};
