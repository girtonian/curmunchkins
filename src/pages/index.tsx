import Head from 'next/head';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 2rem;
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.emotionBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  transition: ${({ theme }) => theme.transitions.bounce};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.button};
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Kin - Curmunchkins AI Companion</title>
        <meta name="description" content="AI companion for neurodivergent children" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeContainer>
        <Main>
          <h1>Meet Kin</h1>
          <p>Your friendly AI companion for neurodivergent children ages 4-12</p>
          
          <Card>
            <h2>Safe, Engaging, and Personalized</h2>
            <p>Kin adapts to different neurodivergent profiles and age ranges to provide the most supportive experience for your child.</p>
            <ActionButton>Get Started</ActionButton>
          </Card>
          
          <div>
            <h3>Features</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>🧩 Adaptive AI that understands neurodivergent needs</li>
              <li>🛡️ Built with safety as the top priority</li>
              <li>🎮 Engaging activities for learning and development</li>
              <li>🔄 Personalized interactions based on individual preferences</li>
              <li>👪 Comprehensive parental controls and oversight</li>
            </ul>
          </div>
        </Main>
      </HomeContainer>
    </>
  );
}