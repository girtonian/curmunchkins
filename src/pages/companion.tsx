import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout } from '@/components/Layout';
import { Companion } from '@/components/Companion';

const CompanionPageContainer = styled.div`
  padding: 2rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const OptionGroup = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

const OptionTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const OptionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const OptionButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.white};
  color: ${({ isActive, theme }) => isActive ? theme.colors.white : theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-weight: ${({ isActive }) => isActive ? 'bold' : 'normal'};
  
  &:hover {
    background-color: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.emotionBg};
  }
`;

const CompanionPage: React.FC = () => {
  const [profileType, setProfileType] = useState('default');
  const [ageRange, setAgeRange] = useState<'4-6' | '7-9' | '10-12'>('7-9');
  
  const profiles = [
    { id: 'default', name: 'Default' },
    { id: 'autism', name: 'Autism' },
    { id: 'adhd', name: 'ADHD' },
    { id: 'dyslexia', name: 'Dyslexia' },
    { id: 'anxiety', name: 'Anxiety' },
  ];
  
  const ageRanges = [
    { id: '4-6', name: '4-6 years' },
    { id: '7-9', name: '7-9 years' },
    { id: '10-12', name: '10-12 years' },
  ];
  
  return (
    <Layout title="Chat with Kin | Curmunchkins AI Companion">
      <CompanionPageContainer>
        <Head>
          <title>Chat with Kin | Curmunchkins AI Companion</title>
        </Head>
        
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Chat with Kin
        </h1>
        
        <OptionsContainer>
          <OptionGroup>
            <OptionTitle>Profile Type:</OptionTitle>
            <OptionButtons>
              {profiles.map((profile) => (
                <OptionButton
                  key={profile.id}
                  isActive={profileType === profile.id}
                  onClick={() => setProfileType(profile.id)}
                >
                  {profile.name}
                </OptionButton>
              ))}
            </OptionButtons>
          </OptionGroup>
          
          <OptionGroup>
            <OptionTitle>Age Range:</OptionTitle>
            <OptionButtons>
              {ageRanges.map((age) => (
                <OptionButton
                  key={age.id}
                  isActive={ageRange === age.id}
                  onClick={() => setAgeRange(age.id as '4-6' | '7-9' | '10-12')}
                >
                  {age.name}
                </OptionButton>
              ))}
            </OptionButtons>
          </OptionGroup>
        </OptionsContainer>
        
        <Companion profileType={profileType} ageRange={ageRange} />
      </CompanionPageContainer>
    </Layout>
  );
};

export default CompanionPage;