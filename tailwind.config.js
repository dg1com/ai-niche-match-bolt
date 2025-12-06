/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bolt-primary': '#007bff',
        'bolt-secondary': '#6c757d',
        'bolt-success': '#28a745',
        'bolt-danger': '#dc3545',
        'bolt-warning': '#ffc107',
        'bolt-info': '#17a2b8',
        'bolt-light': '#f8f9fa',
        'bolt-dark': '#343a40',
        'bolt-white': '#ffffff',
      },
      spacing: {
        'bolt-sm': '0.5rem',
        'bolt-md': '1rem',
        'bolt-lg': '1.5rem',
        'bolt-xl': '2rem',
      },
      borderRadius: {
        'bolt-sm': '0.25rem',
        'bolt-md': '0.5rem',
        'bolt-lg': '1rem',
        'bolt-full': '9999px',
      },
      boxShadow: {
        'bolt-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'bolt-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'bolt-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};