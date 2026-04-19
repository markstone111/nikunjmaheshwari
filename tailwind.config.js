import tailwindAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'], // For TARS
      },
      colors: {
        // Neo-Brutalist Palette (Shades of Green & Accents)
        brutal: {
          bg: '#f4f4f0', // Off-white typical in brutalism
          green: '#4ade80', // Brighter green for hero accents/buttons
          darkGreen: '#22c55e', 
          purple: '#c084fc',
          yellow: '#fde047',
          blue: '#93c5fd',
          pink: '#f9a8d4',
        },
        tars: {
          dark: '#0a0a0a',
          board: '#171717',
          gray: '#262626',
        }
      },
      boxShadow: {
        // classic neo-brutalist solid black drop shadow
        'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
      },
      borderWidth: {
        'brutal': '3px',
      }
    },
  },
  plugins: [tailwindAnimate],
};