
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'next':"linear-gradient(to right, #3D46F2,#5581D9)"
      },
      backgroundColor:{
        'forbox':"#5E88BF"
      },
      keyframes: {
        wiggle: {
          '0%': { width:'0px' },
          '100%': { width:'1000px' },
        }
      },
      animation:
      {wiggle:'wiggle 2s ease-in-out',

      },



    },
  },
  plugins: [],
}
