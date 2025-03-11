import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 6rem;
`;

const Bio = styled.p`
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
`;

interface HeaderProps {
  name: string;
  email: string;
  bio: string;
}

const Header: React.FC<HeaderProps> = ({ name, email, bio }) => {
  return (
    <header
      style={{
        marginBottom: '3rem',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
        }}
      >
        {name}
      </h1>
      {/* TODO: make the email clickable */}
      <h3
        style={{
          fontSize: '1.125rem',
          color: '#AAA',
          maxWidth: '600px',
          marginBottom: '0.25em',
        }}
      >
        {email.toUpperCase()}
      </h3>
      <p
        style={{
          fontSize: '1.125rem',
          color: '#666',
          maxWidth: '600px',
        }}
      >
        {bio}
      </p>
    </header>
  );
};

export default Header;
export { Bio }; // Exporting Bio as it's used in other components 