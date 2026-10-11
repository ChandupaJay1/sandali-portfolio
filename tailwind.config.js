/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F0F5F3',
          100: '#DCE7E3',
          200: '#BDD2CB',
          300: '#91B3A8',
          400: '#5F8F81',
          500: '#3D7063',
          600: '#2C574C',
          700: '#22463D',
          800: '#183D35', // Primary Forest Green
          900: '#112D27',
          950: '#0A1C18',
        },
        ivory: {
          50: '#FDFCF9',
          100: '#FAF8F2', // Primary Warm Ivory
          200: '#F4EFE3',
          300: '#EAE1CE',
          400: '#DACDB5',
          500: '#C4B395',
          600: '#A99474',
        },
        sage: {
          50: '#F5F7F4',
          100: '#E8ECE6',
          200: '#D3DDD0',
          300: '#B8C9B5', // Muted Sage
          400: '#9BB197',
          500: '#7E977A',
          600: '#637A60',
          700: '#4D5F4A',
        },
        terracotta: {
          50: '#FAF3F0',
          100: '#F4E3DD',
          200: '#EAC8BD',
          300: '#DEA796',
          400: '#D48D75',
          500: '#C98268', // Soft Terracotta
          600: '#B4664B',
          700: '#934F37',
          800: '#743E2C',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#CECECE',
          300: '#AFAFAF',
          400: '#818181',
          500: '#5F6260',
          600: '#434644',
          700: '#343735',
          800: '#292C2A', // Charcoal
          900: '#1D1F1E',
          950: '#121312',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(24, 61, 53, 0.06)',
        'medium': '0 10px 30px -4px rgba(24, 61, 53, 0.1)',
        'card': '0 2px 12px 0 rgba(24, 61, 53, 0.04), 0 1px 3px 0 rgba(24, 61, 53, 0.02)',
      }
    },
  },
  plugins: [],
}


