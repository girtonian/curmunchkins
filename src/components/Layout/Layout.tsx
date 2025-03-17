import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Main = styled.main`
  min-height: calc(100vh - 140px); // Account for navbar and footer
  display: flex;
  flex-direction: column;
`;

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Kin - Curmunchkins AI Companion',
  description = 'AI companion for neurodivergent children ages 4-12',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};