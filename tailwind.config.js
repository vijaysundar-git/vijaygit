/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a'
        },
        'accent': {
          500: '#8b5cf6',
          600: '#7c3aed'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'blob': 'blob 7s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0', transform: 'translateY(20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'}
        },
        slideUp: {
          '0%': {opacity: '0', transform: 'translateY(30px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'}
        },
        bounceGentle: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-10px)'}
        },
        blob: {
          '0%': {transform: 'translate(0px, 0px) scale(1)'},
          '33%': {transform: 'translate(30px, -50px) scale(1.1)'},
          '66%': {transform: 'translate(-20px, 20px) scale(0.9)'},
          '100%': {transform: 'translate(0px, 0px) scale(1)'}
        }
      },
      animationDelay: {
        '2000': '2s',
        '4000': '4s'
      }
    },
  },
  plugins: [],
}