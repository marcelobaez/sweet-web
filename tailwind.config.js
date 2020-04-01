module.exports = {
  theme: {
    inset: {
      "0": 0,
      auto: "auto",
      "1/2": "50%"
    },
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
        "120": "30rem",
        "132": "33rem"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
