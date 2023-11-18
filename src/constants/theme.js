export const theme = Object.freeze({
  colors: {
    black: '#010101',
    white: 'white',
    blue: 'blue',
    red: 'red',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  transition: (prop = '') => `${prop} 250ms linear`,
  spacing: value => `${value * 4}px`,
});
