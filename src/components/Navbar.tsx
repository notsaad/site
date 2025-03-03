import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: transparent;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 70px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.md};
    padding: 2rem;
    transition: right 0.3s ease;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  margin: 0 1.5rem;
  font-weight: 500;
  color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.textPrimary)};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  span {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 4px;
    border-radius: 5px;
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <NavContainer>
      <Logo>Portfolio</Logo>
      
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" active={location.pathname === '/'}>
          Home
        </NavLink>
        <NavLink to="/about" active={location.pathname === '/about'}>
          About
        </NavLink>
        <NavLink to="/projects" active={location.pathname === '/projects'}>
          Projects
        </NavLink>
        <NavLink to="/contact" active={location.pathname === '/contact'}>
          Contact
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;