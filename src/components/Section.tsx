import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionContainer = styled.section`
  margin: 4rem 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  margin: 1rem auto 0;
`;

const SectionContent = styled.div`
  width: 100%;
`;

const Section: React.FC<SectionProps> = ({ title, subtitle, children, id, className }) => {
  return (
    <SectionContainer id={id} className={className}>
      {(title || subtitle) && (
        <SectionHeader>
          {title && <SectionTitle>{title}</SectionTitle>}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </SectionHeader>
      )}
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

export default Section;