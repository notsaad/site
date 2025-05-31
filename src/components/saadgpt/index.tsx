import React, { useState, useRef, useEffect } from "react";
import { Container, MainContent, MessagesContainer } from "./styled";
import { Sidebar } from "./Sidebar";
import { Message } from "./Message";
import { InputArea } from "./InputArea";

interface MessageType {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface Conversation {
  id: string;
  title: string;
  messages: MessageType[];
  createdAt: Date;
}

export const SaadGPT: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<
    string | null
  >(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
    if (conversations.length === 0) {
      createNewConversation();
    }
  }, [conversations]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const createNewConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [],
      createdAt: new Date(),
    };

    setConversations((prev) => [newConversation, ...prev]);
    setCurrentConversationId(newConversation.id);
  };

  const getCurrentConversation = (): Conversation | undefined => {
    return conversations.find((conv) => conv.id === currentConversationId);
  };

  const handleNewMessage = async (content: string) => {
    if (!currentConversationId) return;

    const userMessage: MessageType = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    // Update conversation with user message
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === currentConversationId) {
        return {
          ...conv,
          messages: [...conv.messages, userMessage],
          title:
            conv.messages.length === 0
              ? content.slice(0, 30) + (content.length > 30 ? "..." : "")
              : conv.title,
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setIsProcessing(true);

    try {
      // TODO: Replace with actual API call to your backend
      // For now, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const botResponse: MessageType = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm SaadGPT, your AI assistant. This is a simulated response. The actual integration with the backend will be implemented later.",
        isUser: false,
        timestamp: new Date(),
      };

      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === currentConversationId
            ? { ...conv, messages: [...conv.messages, botResponse] }
            : conv
        )
      );
    } catch (error) {
      console.error("Error sending message:", error);

      const errorMessage: MessageType = {
        id: (Date.now() + 2).toString(),
        content: "Sorry, I encountered an error. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };

      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === currentConversationId
            ? { ...conv, messages: [...conv.messages, errorMessage] }
            : conv
        )
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const currentConversation = getCurrentConversation();

  return (
    <Container>
      <Sidebar
        conversations={conversations.map(({ id, title }) => ({ id, title }))}
        onNewChat={createNewConversation}
        onSelectConversation={(id) => setCurrentConversationId(id)}
        activeConversationId={currentConversationId}
      />

        <MainContent>
        {currentConversation?.messages.length === 0 ? (
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <InputArea
                onSendMessage={handleNewMessage}
                isProcessing={isProcessing}
                />
            </div>
        ) : (
          <MessagesContainer>
            {currentConversation?.messages.map((message) => (
              <Message
                key={message.id}
                content={message.content}
                isUser={message.isUser}
              />
            ))}
            <div ref={messagesEndRef} />
          </MessagesContainer>
        )}
        </MainContent>
    </Container>
  );
};
