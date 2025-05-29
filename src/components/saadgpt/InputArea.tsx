import React, { useState, useRef, KeyboardEvent } from 'react';
import { InputContainer, InputWrapper, TextArea, SendButton } from './styles';

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

export const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isProcessing }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage && !isProcessing) {
      onSendMessage(trimmedMessage);
      setMessage('');
      adjustTextareaHeight();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  return (
    <InputContainer>
      <InputWrapper>
        <TextArea
          ref={textareaRef}
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="What can SaadGPT help with?"
          rows={1}
          disabled={isProcessing}
        />
        <SendButton 
          onClick={handleSend} 
          disabled={isProcessing || !message.trim()}
          title="Send message"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SendButton>
      </InputWrapper>
    </InputContainer>
  );
};
