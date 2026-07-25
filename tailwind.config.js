/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0A0F0F',
          raised: '#111716',
          border: '#1F2A28',
        },
        ink: {
          DEFAULT: '#E7ECEB',
          muted: '#8A9A96',
          faint: '#5A6B67',
        },
        accent: {
          DEFAULT: '#2DD4BF',
          soft: '#5EEAD4',
          dim: '#14B8A6',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '64rem',
      },
      borderRadius: {
        panel: '4px',
      },
    },
  },
  plugins: [],
}
