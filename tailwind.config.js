/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: 'Poppins',
        serif: 'fields-display',
      },
      colors: {
        wine: '#661e34',
        beige: {
          300: '#fff8dc',
          500: '#D6D0B9',
        },
        green: '#364c3f',
      },
      backgroundImage: {
        introd: "url('/cook-responsive.jpeg')",
      },
    },
  },
  plugins: [],
}
