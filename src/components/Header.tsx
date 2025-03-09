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
  bio: string;
}

const Header: React.FC<HeaderProps> = ({ name, bio }) => {
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