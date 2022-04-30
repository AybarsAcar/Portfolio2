module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        sideToSide: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(12px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
    animation: {
      'arrow-animation': 'sideToSide 1.5s linear infinite',
    },
  },
  plugins: [],
};
