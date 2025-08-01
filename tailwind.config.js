export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haruPurple: '#7a5c99',    // morado Haru
        kasumiRed: '#e63946',     // rojo Kasumi
        makotoBlue: '#1d3557',    // azul Makoto
        sakuraPink: '#fcdde8',    // rosa suave para detalles
      },
      fontFamily: {
        persona: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
