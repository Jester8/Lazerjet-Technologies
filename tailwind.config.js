export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        inria: ['Inria Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.8s ease-out forwards',
      },
      backgroundColor: {
        'light': '#f3f4f6', // Light mode background
        'dark': '#1f2937', // Dark mode background
      },
      textColor: {
        'light': '#1f2937', // Light mode text
        'dark': '#f3f4f6', // Dark mode text
      },
    },
  },
  plugins: [],
};