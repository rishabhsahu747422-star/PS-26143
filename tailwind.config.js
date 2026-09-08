/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        mainText: '#0F172A',
        primaryBlue: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6',
        },
        lightBlue: '#EFF6FF',
        saffron: {
          DEFAULT: '#FF9933',
          dark: '#E67E22',
          light: '#FFB266',
        },
        indiaGreen: {
          DEFAULT: '#138808',
          dark: '#0F6B06',
          light: '#22A316',
        },
        borderSlate: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.08)',
        'lift': '0 20px 35px -8px rgba(37, 99, 235, 0.12)',
      }
    },
  },
  plugins: [],
}
