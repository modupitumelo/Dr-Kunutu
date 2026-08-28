/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pink-forward, warm, feminine medical palette
        brand: {
          50: '#fff1f6',
          100: '#ffe3ee',
          200: '#ffc9dd',
          300: '#ff9fc4',
          400: '#ff6fa3',
          500: '#fb4a8b',
          600: '#ec1f6f',
          700: '#c80f59',
          800: '#a50f4d',
          900: '#881144',
          950: '#51032a',
        },
        // Soft complementary rose-gold accent
        accent: {
          50: '#fff7f3',
          100: '#ffe9e0',
          200: '#ffd2c2',
          300: '#ffb099',
          400: '#ff8567',
          500: '#f96a48',
          600: '#e84f2e',
          700: '#c43d24',
          800: '#9c3222',
          900: '#7d2c20',
        },
        ink: {
          50: '#faf7f8',
          100: '#f3eef0',
          200: '#e6dce0',
          300: '#d2c0c7',
          400: '#b39aa3',
          500: '#967c86',
          600: '#7c636e',
          700: '#645058',
          800: '#4f3f46',
          900: '#3d3137',
          950: '#261c20',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.5' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
