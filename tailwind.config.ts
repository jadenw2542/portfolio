import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        // '2xl': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
        // 'xl': {'max': '1279px'}, // => @media (max-width: 1279px) { ... }
        // 'lg': {'max': '1023px'}, // => @media (max-width: 1023px) { ... }
        // 'md': {'max': '767px'}, // => @media (max-width: 767px) { ... }
        'lg-pc': { min: '2000px' },
        pc: { min: '640px' },
        mobile: { max: '639px' }, // => @media (max-width: 639px) { ... }
      },
    },
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'], // Add Open Sans
      },
      screens: {
        'lg-pc': { min: '2000px' },
        pc: { min: '640px' },
        mobile: { max: '639px' },
      },
      spacing: {
        '42.5': '10.75rem', // Custom rem padding value
        '18': '4.5rem', // Custom rem padding
        '108': '28rem',
        '112': '32rem',
        '120': '36rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
