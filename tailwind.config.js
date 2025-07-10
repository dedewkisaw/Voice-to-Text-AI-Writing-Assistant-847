/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#adc1ff',
          400: '#8aa3ff',
          500: '#6687ff',
          600: '#4b6bff',
          700: '#3d59ff',
          800: '#3046cc',
          900: '#243399',
        },
        neutral: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        }
      },
      boxShadow: {
        'neu-sm': '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
        'neu-md': '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff',
        'neu-lg': '15px 15px 30px #d1d9e6, -15px -15px 30px #ffffff',
        'neu-inset': 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff',
      },
      backgroundImage: {
        'gradient-whitewash': 'linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.glass-effect': {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        '.whitewash-pattern': {
          backgroundImage: `
            linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 4px)
          `,
        },
      });
    },
  ],
}