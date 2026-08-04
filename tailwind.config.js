/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#E9EBE8',
          raised: '#F7F8F6',
          border: '#C8CDC8',
        },
        ink: {
          DEFAULT: '#141816',
          muted: '#5C6660',
          faint: '#8A938C',
        },
        accent: {
          DEFAULT: '#E4572E',
          soft: '#F07A56',
          dim: '#C44520',
        },
        spruce: {
          DEFAULT: '#1B4332',
          soft: '#2D6A4F',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '68rem',
      },
      borderRadius: {
        panel: '2px',
      },
    },
  },
  plugins: [],
}
