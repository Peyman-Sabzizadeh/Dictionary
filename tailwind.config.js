/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": "Poppins",
        "PoppinsBold": "Poppins Bold"
      }
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant("child","& > *");
    }
  ],
}