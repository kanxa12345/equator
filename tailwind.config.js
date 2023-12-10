/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        primary: '#C74044',
        secondary: '#161113',
      },
      fontFamily: {
        custom: ['Times New Roman', 'sans'],
      },
      // fontSize: {
      //   'sm': '14px',
      //   'md': '18px',
      //   'lg': '24px',
      // },
    },
  },
  plugins: [],
}
