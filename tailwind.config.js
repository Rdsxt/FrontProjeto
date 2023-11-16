/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ralewayItalic: ["raleway-italic", "arial"],
        ralewayVariable: ["raleway-variableFont", "arial"]
      },
      backgroundImage: {
        pagInicio: "url('../public/images/telaInicio.jpg')",
        fumaca: "url('../public/images/fumaca.jpg')"
      }
    },
  },
  plugins: [],
}

