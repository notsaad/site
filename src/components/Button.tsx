import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  fullWidth?: boolean;
  small?: boolean;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  target?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ small, theme }) => (small ? '0.5rem 1rem' : '0.75rem 1.5rem')};
  font-size: ${({ small, theme }) => (small ? theme.fontSizes.sm : theme.fontSizes.md)};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  
  ${({ primary, theme }) =>
    primary
      ? `
        background-color: ${theme.colors.primary};
        color: white;
        border: none;
        box-shadow: ${theme.shadows.sm};
        
        &:hover {
          background-color: ${theme.colors.secondary};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.md};
        }
      `
      : `
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
        
        &:hover {
          background-color: ${theme.colors.primary};
          color: white;
        }
      `}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(94, 96, 206, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  fullWidth = false,
  small = false,
  as = 'button',
  href,
  onClick,
  className,
  ...props
}) => {
  return (
    <StyledButton
      as={href ? 'a' : as}
      href={href}
      onClick={onClick}
      primary={primary}
      fullWidth={fullWidth}
      small={small}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;