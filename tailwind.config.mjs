/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F0EA',
          300: '#EFE8DE',
          DEFAULT: '#FAF8F5',
        },
        champagne: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#EBDDC9',
          300: '#E0CAAC',
          DEFAULT: '#F5EFE6',
        },
        beige: {
          50: '#F8F6F0',
          100: '#EFECE2',
          200: '#E3DEC9',
          300: '#D5CDAD',
          DEFAULT: '#EFECE2',
        },
        gold: {
          50: '#FAF6ED',
          100: '#F3EAD5',
          200: '#E6D3A7',
          300: '#D7BC7B',
          400: '#C5A859',
          500: '#B89742',
          600: '#9E7D30',
          DEFAULT: '#C5A859',
          dark: '#93732A',
          light: '#E2CE9F',
        },
        charcoal: {
          800: '#2A2826',
          900: '#1C1A18',
          950: '#121110',
          DEFAULT: '#1A1816',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
