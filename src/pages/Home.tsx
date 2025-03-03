import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HomeContainer = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
`;

const Greeting = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-weight: 500;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 8vw, ${({ theme }) => theme.fontSizes['6xl']});
  margin: 0;
  font-weight: 700;
  line-height: 1.1;
`;

const Headline = styled.h2`
  font-size: clamp(1.5rem, 4vw, ${({ theme }) => theme.fontSizes['3xl']});
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 600px;
  margin-top: 0.5rem;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroContent>
        <Greeting>Hello, my name is</Greeting>
        <Name>John Doe</Name>
        <Headline>I build things for the web</Headline>
        <Description>
          I'm a frontend developer specializing in building exceptional digital experiences.
          Currently, I'm focused on creating accessible, user-centered products.
        </Description>
        <CTAContainer>
          <Button as={Link} to="/projects">
            View Projects
          </Button>
          <Button as={Link} to="/contact" primary={false}>
            Get in Touch
          </Button>
        </CTAContainer>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home;