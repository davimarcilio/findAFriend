/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        1.5: 'repeat(3, minmax(280px, 1fr));',
      },
      fontFamily: {
        Nunito: 'Nunito',
      },
      keyframes: {
        hide: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        slideIn: {
          from: {
            transform: 'translateY(calc(100% + 50px))',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        swipeOut: {
          from: {
            transform: 'translateX(var(--radix-toast-swipe-end-x))',
          },
          to: {
            transform: 'translateX(calc(100% + 50px))',
          },
        },
      },
      animation: {
        'open-alert': 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'close-alert': 'hide 100ms ease-in',
        // 'swipe-move-alert': 'translateX(var(--radix-toast-swipe-move-x))',
        // 'swipe-cancel-alert': 'translateX(0)',
        'swipe-end-alert': 'swipeOut 100ms ease-out',
      },
      colors: {
        white: '#ffff',
        black: '#000000',
        red: {
          50: '#f2f2f2',
          100: '#fdeced',
          150: '#fbe1e2',
          400: '#F75F64',
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
