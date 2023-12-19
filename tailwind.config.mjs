/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities([
        {
          ".base-padding": {
            padding: "0 32px",
          },

          ".lock-width": {
            "max-width": "calc(1536px - 112px)",
            margin: "0 auto",
          },
        },

        {
          "@media (min-width: 768px)": {
            ".base-padding": {
              padding: "0 64px",
            },
          },
        },

        {
          "@media (min-width: 1024px)": {
            ".base-padding": {
              padding: "0 80px",
            },
          },
        },

        {
          "@media (min-width: 1280px)": {
            ".base-padding": {
              padding: "0 96px",
            },
          },
        },

        {
          "@media (min-width: 1536px)": {
            ".base-padding": {
              padding: "0 112px",
            },
          },
        },
      ]);
    },
  ],
};
