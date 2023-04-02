/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffff',
        black: '#000000',
        red: {
          500: '#F15156',
          700: '#E44449',
        },
        yellow: {
          500: '#F4D35E',
        },
        blue: {
          900: '#0D3B66',
        },
      },
    },
  },
  plugins: [],
}
