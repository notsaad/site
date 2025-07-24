import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message as MessageStyled, MessageContent, TextContent } from './styled';

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  isUser: boolean;
}

export const Message: React.FC<MessageProps> = ({ content, isUser, style }) => {
  return (
    <MessageStyled isUser={isUser} style={style}>
      <MessageContent isUser={isUser}>
        <TextContent>
          <ReactMarkdown>{content}</ReactMarkdown>
        </TextContent>
      </MessageContent>
    </MessageStyled>
  );
};
