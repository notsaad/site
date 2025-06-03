import styled from "styled-components";

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
