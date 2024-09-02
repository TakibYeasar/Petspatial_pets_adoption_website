/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#30b300',
        secondary: '#08b40b',
        font: {
          light: 'rgba(22, 28, 45, 0.7)',
          dark: '#c2d0da',
        },
        background: {
          light: '#fff',
          dark: '#232220',
        },
        heading: {
          light: '#252422',
          dark: '#eee',
        },
        border: {
          DEFAULT: 'transparent',
          light: '#eee',
          dark: 'rgba(255, 255, 255, 0.2)',
          'light-dark': 'rgba(255, 255, 255, 0.1)',
        },
        nav: {
          light: '#292922',
          dark: '#fff',
        },
        dropdown: {
          light: '#fff',
          dark: '#121725',
        },
        lightBackground: {
          light: 'rgba(130, 115, 252, .05)',
          dark: '#282828',
        },
        layerBackground: {
          light: 'rgb(0 0 0 / 55%)',
          dark: 'rgb(0 0 0 / 75%)',
        },
        grey: {
          light: '#f7f7f7',
          dark: '#282828',
        },
        footer: {
          light: '#0f1113',
          dark: '#0f1113',
        },
        card: {
          light: '#fff',
          dark: '#888c96',
        },
      },
      borderRadius: {
        DEFAULT: '6px',
        full: '35px',
        md: '8px',
      },
      grayscale: {
        light: '0%',
        dark: '100%',
      },
    },
  },
  plugins: [],
}
