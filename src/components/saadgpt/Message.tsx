import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Message as MessageStyled,
  MessageContent,
  TextContent,
  TypingDot,
  TypingIndicator,
} from './styled';

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  isUser: boolean;
  isLoading?: boolean;
}

export const Message: React.FC<MessageProps> = ({
  content,
  isUser,
  isLoading = false,
  style,
}) => {
  return (
    <MessageStyled isUser={isUser} style={style}>
      <MessageContent isUser={isUser}>
        {isLoading && !isUser ? (
          <TypingIndicator aria-label="SaadGPT is typing">
            <TypingDot />
            <TypingDot />
            <TypingDot />
          </TypingIndicator>
        ) : (
          <TextContent>
            <ReactMarkdown>{content}</ReactMarkdown>
          </TextContent>
        )}
      </MessageContent>
    </MessageStyled>
  );
};
