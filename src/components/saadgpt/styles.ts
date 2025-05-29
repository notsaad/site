import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #212121;
`;

export const Sidebar = styled.div`
  width: 260px;
  background-color: #202123;
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

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

export const Message = styled.div<{ isUser: boolean }>`
  background-color: ${(props) => (props.isUser ? "#444654" : "#343541")};
  color: white;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #5e5e5e;
`;

export const MessageContent = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  gap: 20px;
  padding: 0 20px;
`;

export const Avatar = styled.div<{ isUser: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => (props.isUser ? "#19c37d" : "#5436DA")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`;

export const TextContent = styled.div`
  flex: 1;
  line-height: 1.5;
  padding-top: 5px;
`;

export const InputContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 45px 12px 15px;
  border-radius: 5px;
  border: 1px solid #565869;
  background-color: #303030;
  color: white;
  font-size: 16px;
  resize: none;
  min-height: 50px;
  max-height: 200px;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #10a37f;
  }
`;

export const SendButton = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  background: transparent;
  border: none;
  color: #8e8ea0;
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #343541;
    color: white;
  }
`;

export const SidebarHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid #4d4d4f;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
`;
