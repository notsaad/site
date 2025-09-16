import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #212121;
  font-family: "Inter", sans-serif;
  font-weight: 300;
`;

export const Sidebar = styled.div`
  width: 260px;
  background-color: #171717;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const NewChatButton = styled.button`
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #4d4d4f;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2b2c2f;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  //overflow: hidden;
`;

export const Message = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  margin-left: ${(props) => (props.isUser ? "0" : "6em")};
  margin-right: ${(props) => (props.isUser ? "6em" : "0")};
  padding: 8px 20px;
  margin-bottom: 8px;
`;

export const MessageContent = styled.div<{ isUser: boolean }>`
  max-width: 70%;
  min-width: 100px;
  background-color: ${(props) => (props.isUser ? "#007AFF" : "#212121")};
  color: white;
  border-radius: 18px;
  padding: 12px 16px;
  position: relative;
  word-wrap: break-word;
`;

export const TextContent = styled.div`
  line-height: 1.4;
  font-size: 14px;
`;

const typingBounce = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0.6);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const TypingIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 16px;
`;

export const TypingDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  animation: ${typingBounce} 1.4s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const InputContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 60%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 4em;
  padding: 12px 45px 12px 15px;
  background-color: #303030;
  border: none;
  border-radius: 1rem;
  color: white;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  resize: none;
  min-height: 50px;
  max-height: 200px;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: white;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #676767;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SidebarHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid #4d4d4f;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
`;

export const TopSidebarButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;

  &: hover {
    background-color: #2b2c2f;
    cursor: pointer;
  }
`;
