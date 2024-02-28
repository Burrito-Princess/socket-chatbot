/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/*.ejs',
    './views/css-challenge-2/*.html'
  ],
  theme: {
  
      fontFamily:{
  
      },
      colors: {
        king_brown: '#3a2415',
        king_pink: '#e8b7d5',
        king_white: '#f2f2f2',
        black: '#202020',
        dark_pink: '#685369',
        king_blue: '#6E96CE',
        hover_king_blue: '#4E76AE',
        hover_king_pink: '#ceA3c1',
        grey: '#707070',
        text_grey: '#CCCCCC'
      },
      extend: {
        width:{
          '55' : '13.75rem'
        },
        height: {
          'body_height' : '100%'
        }
      }
  },
  plugins: [
  {
  tailwindcss: {},
  autoprefixer: {},
  },
  ],
  };