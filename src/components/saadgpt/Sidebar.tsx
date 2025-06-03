import React, { useMemo } from 'react';
import { Sidebar as SidebarStyled, TopSidebarButton, SidebarHeader } from './styled';

interface Conversation {
  id: string;
  title: string;
  url?: string;
  dateGroup?: string;
}

interface SidebarProps {
  onNewChat: () => void;
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
  activeConversationId: string | null;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNewChat, conversations }) => {
  // group conversations by dateGroup field
  const grouped = useMemo(() => {
    return conversations.reduce((acc: Record<string, Conversation[]>, conv) => {
      const group = conv.dateGroup || 'Earlier';
      if (!acc[group]) acc[group] = [];
      acc[group].push(conv);
      return acc;
    }, {} as Record<string, Conversation[]>);
  }, [conversations]);

  return (
    <SidebarStyled>
      <TopSidebarButton
        onClick={e => console.log('New chat clicked', e)}
      >
        New Chat
      </TopSidebarButton>
      <TopSidebarButton
        onClick={e => console.log('Project Library Clicked', e)}
      >
        Project Library
      </TopSidebarButton>

      <div style={{ marginTop: '20px', overflowY: 'auto', flex: 1 }}>
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group}>
            <SidebarHeader>{group}</SidebarHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {items.map(conv => (
                <a
                  key={conv.id}
                  href={conv.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#2b2c2f'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {conv.title}
                </a>
              ))}
            </div>
          </div>
        ))}
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
