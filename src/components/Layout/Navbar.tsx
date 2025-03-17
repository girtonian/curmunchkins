import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 10;
  }
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const ParentPortalButton = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo as="a">
          <span>Kin</span>
        </Logo>
      </Link>
      
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </HamburgerButton>
      
      <NavLinks isOpen={isOpen}>
        <Link href="/about" passHref>
          <NavItem>About</NavItem>
        </Link>
        <Link href="/features" passHref>
          <NavItem>Features</NavItem>
        </Link>
        <Link href="/safety" passHref>
          <NavItem>Safety</NavItem>
        </Link>
        <Link href="/parent-portal" passHref>
          <ParentPortalButton>Parent Portal</ParentPortalButton>
        </Link>
      </NavLinks>
    </Nav>
  );
};