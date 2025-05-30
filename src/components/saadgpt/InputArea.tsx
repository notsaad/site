import React from "react";
import { InputContainer, InputWrapper, TextArea } from "./styled";
import { InputButton } from "./InputButton";

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

export const InputArea: React.FC<InputAreaProps> = () => {
  return (
    <InputContainer style={{ border: "1px solid red" }}>
      <InputWrapper>
        <TextArea
          placeholder="Ask anything about Saad..."
        />
        {/* have the button turn white when there is text in the input area */}
        <InputButton />
      </InputWrapper>
    </InputContainer>
  );
};
