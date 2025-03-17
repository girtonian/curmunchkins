import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterHeading = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  text-decoration: none;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
  font-size: 0.9rem;
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Kin</FooterHeading>
          <FooterLink as="p">
            An AI companion designed for neurodivergent children ages 4-12.
          </FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Navigate</FooterHeading>
          <Link href="/" passHref>
            <FooterLink>Home</FooterLink>
          </Link>
          <Link href="/about" passHref>
            <FooterLink>About</FooterLink>
          </Link>
          <Link href="/features" passHref>
            <FooterLink>Features</FooterLink>
          </Link>
          <Link href="/safety" passHref>
            <FooterLink>Safety</FooterLink>
          </Link>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>For Parents</FooterHeading>
          <Link href="/parent-portal" passHref>
            <FooterLink>Parent Portal</FooterLink>
          </Link>
          <Link href="/safety-guidelines" passHref>
            <FooterLink>Safety Guidelines</FooterLink>
          </Link>
          <Link href="/privacy-policy" passHref>
            <FooterLink>Privacy Policy</FooterLink>
          </Link>
          <Link href="/support" passHref>
            <FooterLink>Support</FooterLink>
          </Link>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {currentYear} Curmunchkins. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};