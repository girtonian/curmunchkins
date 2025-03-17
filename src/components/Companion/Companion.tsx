import React, { useState } from 'react';
import styled from 'styled-components';

interface CompanionProps {
  profileType?: string;
  ageRange?: '4-6' | '7-9' | '10-12';
}

const CompanionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) => theme.shadows.card};
  max-width: 800px;
  margin: 2rem auto;
`;

const CharacterDisplay = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

const ChatContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  height: 300px;
  overflow-y: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.shadows.button};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Message = styled.div<{ isUser: boolean }>`
  display: flex;
  flex-direction: ${({ isUser }) => isUser ? 'row-reverse' : 'row'};
  margin-bottom: 1rem;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  background-color: ${({ isUser, theme }) => isUser ? theme.colors.secondary : theme.colors.emotionBg};
  color: ${({ isUser, theme }) => isUser ? theme.colors.white : theme.colors.text};
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  max-width: 80%;
  border-bottom-left-radius: ${({ isUser }) => isUser ? '1rem' : '0'};
  border-bottom-right-radius: ${({ isUser }) => isUser ? '0' : '1rem'};
`;

export const Companion: React.FC<CompanionProps> = ({ 
  profileType = 'default', 
  ageRange = '7-9' 
}) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ text: string, isUser: boolean }[]>([
    { text: "Hi there! I'm Kin, your friendly companion. How can I help you today?", isUser: false }
  ]);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    setChat([...chat, { text: message, isUser: true }]);
    
    // Clear input
    setMessage('');
    
    // Simulate AI response (this would be replaced with actual AI integration)
    setTimeout(() => {
      setChat(prev => [...prev, { 
        text: "That's interesting! I'm still learning, but I'd love to chat about that.", 
        isUser: false 
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <CompanionContainer>
      <CharacterDisplay>
        Kin
      </CharacterDisplay>
      
      <ChatContainer>
        {chat.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            <MessageBubble isUser={msg.isUser}>
              {msg.text}
            </MessageBubble>
          </Message>
        ))}
      </ChatContainer>
      
      <InputContainer>
        <MessageInput
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </InputContainer>
    </CompanionContainer>
  );
};