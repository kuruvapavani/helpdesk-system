module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrayTransparent: "rgba(239, 237, 237, 0.5)",
        hero: "#55D6C2",
        inputBg: 'rgba(196, 196, 196, 0.63)',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sanchez: ['"Sanchez"', 'serif'],
      },
    },
  },
  plugins: [],
};
