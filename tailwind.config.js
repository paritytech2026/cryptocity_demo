export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": {
          '400': '#60b4ff',
          '500': '#3b9dff',
          '600': '#1a85ff',
        },
        "dark-secondary": {
          '50':  '#0f172a',
          '100': '#1e293b',
          '200': '#334155',
          '300': '#475569',
          '400': '#64748b',
          '500': '#94a3b8',
          '600': '#cbd5e1',
          '700': '#e2e8f0',
          '800': '#f1f5f9',
          '900': '#f8fafc',
        },
        "primary": {
          '50': '#edf9ff',
          '100': '#d6f0ff',
          '200': '#b5e7ff',
          '300': '#83d9ff',
          '400': '#48c2ff',
          '500': '#1ea1ff',
          '600': '#0682ff',
          '700': '#006eff',
          '800': '#0854c5',
          '900': '#0d4a9b',
          '950': '#0e2d5d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}