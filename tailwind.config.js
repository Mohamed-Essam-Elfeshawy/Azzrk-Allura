/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.8rem",
          md: "5rem",
          lg: "8rem",
          xl: "12.5rem",
        },
      },
      colors: {
        mainColor: "#3E582B",
        secondColor: "#222222",
        thirdColor: "#E7F0DC",
        fourthColor: "#F6F6F6",
      },
      fontFamily: {
        arabic: ['"Scheherazade New"', 'serif'],
      },
    },
  },
  plugins: [],
};
