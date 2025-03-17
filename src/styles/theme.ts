export const theme = {
  colors: {
    primary: 'var(--primary-color)',
    secondary: 'var(--secondary-color)',
    tertiary: 'var(--tertiary-color)',
    accent: 'var(--accent-color)',
    background: 'var(--background-color)',
    cardBg: 'var(--card-bg-color)',
    text: 'var(--text-color)',
    border: 'var(--border-color)',
    white: 'var(--white)',
    emotionBg: 'var(--emotion-bg)',
    emotionDominantBg: 'var(--emotion-dominant-bg)',
    actionButtonBg: 'var(--action-button-bg)',
    actionButtonBorder: 'var(--action-button-border)',
    buttonHover: 'var(--button-hover)',
  },
  fonts: {
    heading: 'var(--heading-font)',
    body: 'var(--body-font)',
  },
  borderRadius: {
    regular: 'var(--border-radius)',
    small: 'var(--small-radius)',
  },
  shadows: {
    regular: 'var(--shadow)',
    card: 'var(--card-shadow)',
    button: 'var(--button-shadow)',
  },
  transitions: {
    bounce: 'var(--bounce-transition)',
    swing: 'var(--swing-transition)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1440px',
  },
};

export type Theme = typeof theme;