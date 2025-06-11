import React from 'react';
import { Sidebar as SidebarStyled, TopSidebarButton, SidebarHeader } from './styled';

export const Sidebar: React.FC = () => {
  const sidebarItems = [
      { id: '1', title: 'Chat with Saad', url: '/chat/1', displayDate: "Feb 2025" },
      { id: '2', title: 'Project Discussion', url: '/chat/2', displayDate: "Feb 2025" },
      { id: '3', title: 'Meeting Notes', url: '/chat/3', displayDate: "Feb 2025" },
      { id: '4', title: 'Weekly Review', url: '/chat/4', displayDate: "Feb 2025" },
      { id: '5', title: 'Feedback Session', url: '/chat/5', displayDate: "Feb 2025" },
  ];

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
        {sidebarItems.map(item => (
          <div key={item.id}>
            <SidebarHeader>{item.displayDate}</SidebarHeader>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <a
                  key={item.id}
                  href={item.url || '#'}
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
                  {item.title}
                </a>
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
