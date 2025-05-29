import React from 'react';
import { Message as MessageStyled, MessageContent, Avatar, TextContent } from './styles';

interface MessageProps {
  content: string;
  isUser: boolean;
}

export const Message: React.FC<MessageProps> = ({ content, isUser }) => {
  return (
    <MessageStyled isUser={isUser}>
      <MessageContent>
        <Avatar isUser={isUser}>
          {isUser ? 'You' : 'SA'}
        </Avatar>
        <TextContent>
          {content}
        </TextContent>
      </MessageContent>
    </MessageStyled>
  );
};
