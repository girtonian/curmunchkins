import React from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/Layout';

const AboutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1.5rem;
  transition: ${({ theme }) => theme.transitions.bounce};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PrincipleCard = styled(Card)`
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
`;

const AboutPage: React.FC = () => {
  return (
    <Layout title="About Kin | Curmunchkins AI Companion">
      <AboutContainer>
        <h1>About Kin</h1>
        <p>
          Kin is an AI companion specifically designed for neurodivergent children aged 4-12. 
          Our mission is to provide a safe, engaging, and personalized experience to support 
          the educational, social, and emotional development of children with various neurodivergent profiles.
        </p>
        
        <Section>
          <h2>Our Mission</h2>
          <p>
            We believe that every child deserves a companion that understands and adapts to their unique needs. 
            Kin was created to offer personalized support that recognizes the diverse communication patterns, 
            sensory sensitivities, and learning styles of neurodivergent children.
          </p>
        </Section>
        
        <Section>
          <h2>Core Features</h2>
          <CardGrid>
            <Card>
              <CardIcon>🧩</CardIcon>
              <h3>Profile Adaptation</h3>
              <p>
                Kin adapts to eight different neurodivergent profiles, tailoring its communication style, 
                activities, and responses to meet the specific needs associated with each profile.
              </p>
            </Card>
            
            <Card>
              <CardIcon>👶</CardIcon>
              <h3>Age-Appropriate Interactions</h3>
              <p>
                The AI adjusts its language, content, and interaction style based on the child's age group: 
                4-6 years, 7-9 years, or 10-12 years, ensuring developmentally appropriate experiences.
              </p>
            </Card>
            
            <Card>
              <CardIcon>🛡️</CardIcon>
              <h3>Safety by Design</h3>
              <p>
                Built with robust safety features including content moderation, inappropriate prompt detection, 
                and parental controls to ensure a secure and protected environment.
              </p>
            </Card>
            
            <Card>
              <CardIcon>🎮</CardIcon>
              <h3>Engaging Activities</h3>
              <p>
                Offers a variety of interactive and educational activities designed to foster learning, 
                creativity, and development while maintaining the child's interest and engagement.
              </p>
            </Card>
          </CardGrid>
        </Section>
        
        <Section>
          <h2>Our Design Principles</h2>
          <CardGrid>
            <PrincipleCard>
              <h3>Child-Centricity</h3>
              <p>
                All design decisions prioritize the needs, well-being, and developmental stages of children.
              </p>
            </PrincipleCard>
            
            <PrincipleCard>
              <h3>Safety by Design</h3>
              <p>
                Safety features and robust content moderation are integral to Kin's design from its initial conception.
              </p>
            </PrincipleCard>
            
            <PrincipleCard>
              <h3>Inclusivity</h3>
              <p>
                Kin is designed to be accessible and beneficial for children with a diverse range of neurodivergent conditions.
              </p>
            </PrincipleCard>
            
            <PrincipleCard>
              <h3>Ethical AI</h3>
              <p>
                We adhere to ethical guidelines for AI interaction with children, ensuring transparency, privacy, and positive impact.
              </p>
            </PrincipleCard>
          </CardGrid>
        </Section>
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage;