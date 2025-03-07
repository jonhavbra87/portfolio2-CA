/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: '#565656',
        background: '#000000',
        backgroundBlue: '#2D4572',
        gradientFrom: '#4ca5ff',
        gradientTo: '#b573f8',
      },
      fontFamily: {
        body: ['Merriweather Sans', 'sans-serif'], // Brødtekst
        button: ['Rubik', 'sans-serif'], // Knappetekst
        heading: ['Poppins', 'sans-serif'], // Overskrifter
        ingress: ['Rubik', 'sans-serif'], // Ingress
        menu: ['Poppins', 'sans-serif'], // Meny
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-20px)', opacity: '0' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-in-out',
      },
    },
  },
  plugins: [scrollbarHide],
};
