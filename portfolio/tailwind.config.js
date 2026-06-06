/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'Courier New', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        brutalist: {
          black: '#0a0a0a',
          white: '#f5f5f0',
          yellow: '#f5e642',
          red: '#e63227',
          blue: '#1a1aff',
        },
      },
      boxShadow: {
        brutal: '4px 4px 0px #0a0a0a',
        'brutal-lg': '8px 8px 0px #0a0a0a',
        'brutal-xl': '12px 12px 0px #0a0a0a',
      },
    },
  },
  plugins: [],
}
