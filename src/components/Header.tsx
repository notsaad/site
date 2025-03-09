import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 6rem;
`;

const Name = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
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
    <HeaderContainer>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
    </HeaderContainer>
  );
};

export default Header;
export { Bio }; // Exporting Bio as it's used in other components 