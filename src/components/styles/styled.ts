import styled from 'styled-components';

interface StyledLinkProps {
  $isDarkMode?: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
    padding: 10px 20px;
    background-color: ${props => props.$isDarkMode ? '#007bff' : '#2a7bde'} !important;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    border: 2px solid transparent;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: ${props => props.$isDarkMode ? '#0056b3' : '#349beb'} !important;
        border-color: ${props => props.$isDarkMode ? '#007bff' : '#0066cc'};
        cursor: pointer;
        transform: translateY(-1px);
    }
`;