import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Import PeachyKeenJF font */
  @font-face {
    font-family: 'PeachyKeenJF';
    src: url('/fonts/PeachyKeenJF.woff2') format('woff2'),
         url('/fonts/PeachyKeenJF.woff') format('woff'),
         url('/fonts/PeachyKeenJF.svg#PeachyKeenJF') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block; /* Changed to block to ensure font is displayed before fallback */
  }

  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Patrick+Hand&display=swap');

  :root {
    /* Playful color palette with high contrast */
    --primary-color: #512DA8; /* Darker purple for better contrast */
    --secondary-color: #FFA000; /* Darker amber for better contrast */
    --tertiary-color: #E53935; /* Darker red for better contrast */
    --accent-color: #2E7D32; /* Darker green for better contrast */
    --background-color: #f9f4ff;
    --card-bg-color: #ffffff;
    --text-color: #212121; /* Darker text for better contrast */
    --border-color: #bdbdbd;
    --white: #ffffff;
    
    /* Emotion colors */
    --emotion-bg: #f0e6ff;
    --emotion-dominant-bg: #c5b9e8;
    --action-button-bg: #f3d2c1;
    --action-button-border: #e0b9a3;
    --button-hover: #e5daf5;
    
    /* UI elements */
    --border-radius: 15px;
    --small-radius: 8px;
    --shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    --card-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --button-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    
    /* Typography - restored to original */
    --heading-font: 'PeachyKeenJF', cursive;
    --body-font: 'Patrick Hand', 'Nunito', sans-serif;
    
    /* Animations */
    --bounce-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --swing-transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--body-font);
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(255, 203, 119, 0.05) 0%, transparent 20%),
      radial-gradient(circle at 90% 80%, rgba(106, 76, 147, 0.05) 0%, transparent 20%);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
    font-weight: normal;
    margin-bottom: 1rem;
    letter-spacing: 0.03em;
    color: var(--primary-color);
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 2.2rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.8rem;
    line-height: 1.3;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1.1rem; /* Slightly larger for better readability */
  }

  button {
    font-family: var(--body-font);
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: var(--small-radius);
    padding: 0.75rem 1rem;
    font-size: 1rem;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--button-hover);
    }
  }

  /* Responsive breakpoints */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.8rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    body {
      padding: 0;
    }
  }
`;