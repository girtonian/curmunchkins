import React from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/Layout';

const SafetyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const SafetyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SafetyCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SafetyIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.emotionBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
`;

const SafetyPage: React.FC = () => {
  return (
    <Layout title="Safety | Curmunchkins AI Companion">
      <SafetyContainer>
        <h1>Safety First</h1>
        <p>
          At Curmunchkins, the safety and well-being of children is our highest priority. 
          Kin has been designed with "safety by design" principles, ensuring that robust safety 
          measures are integrated into every aspect of the AI companion.
        </p>
        
        <InfoBox>
          <h3>Our Safety Promise</h3>
          <p>
            We are committed to creating a secure environment where children can interact, learn, and develop 
            without exposure to inappropriate content or experiences.
          </p>
        </InfoBox>
        
        <Section>
          <h2>Content Moderation</h2>
          <SafetyGrid>
            <SafetyCard>
              <SafetyIcon>🛡️</SafetyIcon>
              <h3>Advanced NLP Filtering</h3>
              <p>
                Robust natural language processing technology detects and filters out 
                potentially harmful or inappropriate content in real-time.
              </p>
            </SafetyCard>
            
            <SafetyCard>
              <SafetyIcon>🚫</SafetyIcon>
              <h3>Prompt Detection</h3>
              <p>
                Sophisticated systems identify and decline nefarious or tricky prompts that 
                might attempt to bypass safety measures.
              </p>
            </SafetyCard>
            
            <SafetyCard>
              <SafetyIcon>📝</SafetyIcon>
              <h3>Safe Responses</h3>
              <p>
                All of Kin's responses are validated through multiple safety layers to ensure 
                they are appropriate, helpful, and child-friendly.
              </p>
            </SafetyCard>
          </SafetyGrid>
        </Section>
        
        <Section>
          <h2>Parental Oversight</h2>
          <SafetyGrid>
            <SafetyCard>
              <SafetyIcon>👪</SafetyIcon>
              <h3>Parent Portal</h3>
              <p>
                A dedicated interface for parents to monitor and manage their child's 
                experience with Kin, including conversation logs and activity summaries.
              </p>
            </SafetyCard>
            
            <SafetyCard>
              <SafetyIcon>⏰</SafetyIcon>
              <h3>Time Management</h3>
              <p>
                Set time limits and usage schedules to help maintain a healthy balance 
                of digital and offline activities.
              </p>
            </SafetyCard>
            
            <SafetyCard>
              <SafetyIcon>🔒</SafetyIcon>
              <h3>Privacy Controls</h3>
              <p>
                Comprehensive privacy settings allow parents to control what information 
                is shared and how it is used within the application.
              </p>
            </SafetyCard>
          </SafetyGrid>
        </Section>
        
        <Section>
          <h2>Ethical Design</h2>
          <SafetyGrid>
            <SafetyCard>
              <SafetyIcon>⚖️</SafetyIcon>
              <h3>Bias Prevention</h3>
              <p>
                Our AI is trained on carefully curated datasets to prevent harmful biases 
                and ensure fair and inclusive interactions.
              </p>
            </SafetyCard>
            
            <SafetyCard>
              <SafetyIcon>🔍</SafetyIcon>
              <h3>Transparency</h3>
              <p>
                Age-appropriate explanations about how Kin works help children understand 
                the technology they're interacting with.
              </p>
            </SafetyCard>
            
            <SafetyCard>
              <SafetyIcon>📋</SafetyIcon>
              <h3>Regular Audits</h3>
              <p>
                Ongoing safety and ethical audits by child development and AI safety 
                professionals ensure continuous improvement.
              </p>
            </SafetyCard>
          </SafetyGrid>
        </Section>
        
        <InfoBox>
          <h3>COPPA Compliance</h3>
          <p>
            Kin is fully compliant with the Children's Online Privacy Protection Act (COPPA), 
            implementing all required safeguards for collecting and handling children's personal information.
          </p>
        </InfoBox>
      </SafetyContainer>
    </Layout>
  );
};

export default SafetyPage; 