import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const CardContainer = styled.div<{ hoverable?: boolean }>`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  ${({ hoverable, theme }) =>
    hoverable &&
    `
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${theme.shadows.md};
    }
  `}
`;

const Card: React.FC<CardProps> = ({ children, className, hoverable = false }) => {
  return (
    <CardContainer className={className} hoverable={hoverable}>
      {children}
    </CardContainer>
  );
};

export default Card;