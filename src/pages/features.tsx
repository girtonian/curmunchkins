import React from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/Layout';

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeaturesPage: React.FC = () => {
  return (
    <Layout title="Features | Curmunchkins AI Companion">
      <FeaturesContainer>
        <h1>Features</h1>
        <p>
          Kin is designed with a rich set of features to support neurodivergent children aged 4-12 
          in their educational, social, and emotional development journey.
        </p>
        
        <Section>
          <h2>Core Capabilities</h2>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🧩</FeatureIcon>
              <h3>Neurodivergent Profile Adaptation</h3>
              <p>
                Kin adapts to eight different neurodivergent profiles, tailoring its responses 
                and interaction style to meet the specific needs of each child.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>👶</FeatureIcon>
              <h3>Age-Appropriate Content</h3>
              <p>
                All interactions are adjusted based on the child's age group (4-6, 7-9, or 10-12 years), 
                ensuring developmentally appropriate language and activities.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🎯</FeatureIcon>
              <h3>Personalized Learning</h3>
              <p>
                Kin remembers preferences and adapts over time, creating a truly personalized 
                experience for each child within safe boundaries.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </Section>
        
        <Section>
          <h2>Interaction Features</h2>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🗣️</FeatureIcon>
              <h3>Natural Voice Communication</h3>
              <p>
                Kin uses natural-sounding child-friendly voices with adjustable tone and speed 
                to accommodate sensory preferences.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🎮</FeatureIcon>
              <h3>Interactive Activities</h3>
              <p>
                Engaging educational games, creative storytelling, and interactive quizzes 
                designed to foster learning while maintaining interest.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🌟</FeatureIcon>
              <h3>Positive Reinforcement</h3>
              <p>
                Consistent encouragement and positive feedback to build confidence 
                and foster a growth mindset.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </Section>
        
        <Section>
          <h2>Parent Controls</h2>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>⏱️</FeatureIcon>
              <h3>Usage Management</h3>
              <p>
                Set time limits and schedule access times to encourage healthy 
                digital habits and prevent excessive screen time.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>📊</FeatureIcon>
              <h3>Interaction Monitoring</h3>
              <p>
                Review conversation logs and activity summaries to stay informed 
                about your child's interactions with Kin.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>⚙️</FeatureIcon>
              <h3>Customization Options</h3>
              <p>
                Tailor Kin's behavior by enabling or disabling features and setting 
                boundaries on topics and content.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </Section>
      </FeaturesContainer>
    </Layout>
  );
};

export default FeaturesPage; 