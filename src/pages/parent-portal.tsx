import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/Layout';

const PortalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const LoginSection = styled.section`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.emotionBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
`;

const ParentPortalPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a placeholder for actual authentication
    // In a real implementation, this would connect to an authentication service
    if (email && password) {
      // Redirect to dashboard or authenticated area
      alert('Login functionality would be implemented here in a real application');
    } else {
      setError('Please enter both email and password');
    }
  };
  
  return (
    <Layout title="Parent Portal | Curmunchkins AI Companion">
      <PortalContainer>
        <h1>Parent Portal</h1>
        <p>
          The Parent Portal gives you access to monitor and manage your child's experience with Kin. 
          Review conversation logs, set usage limits, customize features, and ensure a safe and 
          beneficial experience for your child.
        </p>
        
        <InfoBox>
          <h3>First Time Here?</h3>
          <p>
            If you don't have an account yet, please contact our support team to set up your parent account. 
            We require verification to ensure only authorized adults can access children's information.
          </p>
        </InfoBox>
        
        <LoginSection>
          <h2>Login to Parent Portal</h2>
          <form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </FormGroup>
            
            <Button type="submit">Log In</Button>
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
          
          <p style={{ marginTop: '1rem', textAlign: 'center' }}>
            <a href="/reset-password" style={{ color: '#007bff', textDecoration: 'none' }}>
              Forgot your password?
            </a>
          </p>
        </LoginSection>
        
        <InfoBox>
          <h3>Key Features of the Parent Portal</h3>
          <ul>
            <li><strong>Conversation Monitoring:</strong> Review logs of your child's interactions with Kin</li>
            <li><strong>Time Management:</strong> Set usage limits and schedules</li>
            <li><strong>Content Controls:</strong> Customize topics and features available to your child</li>
            <li><strong>Progress Tracking:</strong> Monitor your child's engagement and development</li>
            <li><strong>Privacy Settings:</strong> Manage data collection and usage preferences</li>
          </ul>
        </InfoBox>
      </PortalContainer>
    </Layout>
  );
};

export default ParentPortalPage; 