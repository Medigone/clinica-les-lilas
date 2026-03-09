import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: '#252525', // Gris foncé proche du noir
        secondary: '#6B6B6B', // Gris moyen (texte secondaire)
        background: '#F5F0E8', // Beige clair
        surface: '#FFFFFF', // White
        text: '#252525', // Gris foncé proche du noir
        'text-light': '#6B6B6B', // Gris moyen
        'accent-warm': '#333333', // Gris foncé pour boutons (alias)
        'accent-gold': '#6B6B6B', // Gris (alias)
        'gray-light': '#F5F5F5',
        'gray-lighter': '#FAFAF8', // Blanc cassé / beige
        'gray-dark': '#252525',
        'gray-darker': '#333333',
        'border': '#E5E5E5', // Gris très clair
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      ringColor: ({ theme }) => ({
        DEFAULT: theme('colors.primary'),
        ...theme('colors'),
      }),
    },
  },
  plugins: [],
}

