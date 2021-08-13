module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myblue: '#141E61',
        mydarkblue: '#0F044C',
        mygray: '#EEEEEE',
        mydarkgray: '#787A91',
  
      },
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
