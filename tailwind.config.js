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
        bebas: ['Bebas Neue', 'cursive'], // Add Bebas Neue here
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
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
