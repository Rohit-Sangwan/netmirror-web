/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        'background-light': '#1F1F1F',
        primary: '#BB86FC',
        'primary-dark': '#9D4EDD',
        secondary: {
          DEFAULT: '#03DAC6',
          dark: '#018786',
        },
        error: '#CF6679',
        'on-background': '#FFFFFF',
        'on-surface': '#FFFFFF',
        'on-primary': '#000000',
        'on-secondary': '#000000',
        'on-error': '#000000',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      },
      animation: {
        'ripple': 'ripple 0.6s linear',
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.4' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} 