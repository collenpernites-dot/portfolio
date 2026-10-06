/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b1bac9',
          400: '#8593a9',
          500: '#67758d',
          600: '#525e73',
          700: '#434d5f',
          800: '#3a4351',
          900: '#2f3641',
          950: '#1e232b',
        },
        accent: {
          50: '#eef6f6',
          100: '#d5eaeb',
          200: '#b0d8da',
          300: '#7fbec2',
          400: '#4fa2a8',
          500: '#35888f',
          600: '#2d6e76',
          700: '#295b64',
          800: '#274c54',
          900: '#254149',
          950: '#122a30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.04), 0 8px 24px -12px rgba(16,24,40,0.12)',
        lift: '0 12px 32px -12px rgba(16,24,40,0.22)',
      },
    },
  },
  plugins: [],
}
