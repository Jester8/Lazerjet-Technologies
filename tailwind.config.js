export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        inria: ['Inria Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      keyframes: {
        slideLeftToRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'slide-left-to-right': 'slideLeftToRight 20s linear infinite',
      },
      backgroundColor: {
        light: '#f3f4f6', // Light mode background
        dark: '#1f2937',  // Dark mode background
      },
      textColor: {
        light: '#1f2937', // Light mode text
        dark: '#f3f4f6',  // Dark mode text
      },
    },
  },
  plugins: [],
};
