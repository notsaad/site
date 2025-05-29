import React from 'react';
import { Sidebar as SidebarStyled, NewChatButton, SidebarHeader } from './styles';

interface Conversation {
  id: string;
  title: string;
}

interface SidebarProps {
  onNewChat: () => void;
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
  activeConversationId: string | null;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onNewChat,
  conversations,
  onSelectConversation,
  activeConversationId,
}) => {
  return (
    <SidebarStyled>
      <NewChatButton onClick={onNewChat}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        New chat
      </NewChatButton>

      <div style={{ marginTop: '20px', overflowY: 'auto', flex: 1 }}>
        <SidebarHeader>Recent conversations</SidebarHeader>
        {conversations.length === 0 ? (
          <div style={{ color: '#8e8ea0', padding: '10px', fontSize: '14px', textAlign: 'center' }}>
            No conversations yet
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => onSelectConversation(conv.id)}
                style={{
                  padding: '10px',
                  textAlign: 'left',
                  backgroundColor: activeConversationId === conv.id ? '#343541' : 'transparent',
                  border: 'none',
                  color: 'white',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.2s',
                }}
                onMouseOver={(e) => {
                  if (activeConversationId !== conv.id) {
                    e.currentTarget.style.backgroundColor = '#2b2c2f';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeConversationId !== conv.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {conv.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: 'auto', padding: '10px 0', borderTop: '1px solid #4d4d4f' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', marginBottom: '15px', justifyContent: 'center' }}>
          <a
            href="/"
            style={{
              padding: '10px',
              textAlign: 'center',
              backgroundColor: 'transparent',
              border: '1px solid #4d4d4f',
              color: 'white',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2b2c2f';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Home
          </a>
          <a
            href="/resume"
            style={{
              padding: '10px',
              textAlign: 'center',
              backgroundColor: 'transparent',
              border: '1px solid #4d4d4f',
              color: 'white',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2b2c2f';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Resume
          </a>
        </div>
        <div style={{ color: '#8e8ea0', fontSize: '12px', textAlign: 'center', paddingTop: '10px', borderTop: '1px solid #4d4d4f' }}>
          SaadGPT v1.0.0
        </div>
      </div>
    </SidebarStyled>
  );
};
