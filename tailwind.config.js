/**
 * Tailwind Config
 */
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#274472', // elegant matte blue
          dark: '#102542',    // deep matte navy
          light: '#41729F',   // soft matte blue
        },
      },
      keyframes: {
        zoomPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        dotDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        zoomPulse: 'zoomPulse 30s ease-in-out infinite',
        dotDrift: 'dotDrift 20s linear infinite',
      },
    },
  },
  plugins: [typography],
}
