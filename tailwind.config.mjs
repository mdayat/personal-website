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
            "padding-left": "32px",
            "padding-right": "32px",
          },

          ".base-margin": {
            "margin-left": "32px",
            "margin-right": "32px",
          },

          ".lock-width": {
            "max-width": "calc(1536px - 112px)",
            "margin-left": "auto",
            "margin-right": "auto",
          },
        },

        {
          "@media (min-width: 768px)": {
            ".base-padding": {
              "padding-left": "64px",
              "padding-right": "64px",
            },

            ".base-margin": {
              "margin-left": "64px",
              "margin-right": "64px",
            },
          },
        },

        {
          "@media (min-width: 1024px)": {
            ".base-padding": {
              "padding-left": "80px",
              "padding-right": "80px",
            },

            ".base-margin": {
              "margin-left": "80px",
              "margin-right": "80px",
            },
          },
        },

        {
          "@media (min-width: 1280px)": {
            ".base-padding": {
              "padding-left": "96px",
              "padding-right": "96px",
            },

            ".base-margin": {
              "margin-left": "96px",
              "margin-right": "96px",
            },
          },
        },

        {
          "@media (min-width: 1536px)": {
            ".base-padding": {
              "padding-left": "112px",
              "padding-right": "112px",
            },

            ".base-margin": {
              "margin-left": "112px",
              "margin-right": "112px",
            },
          },
        },
      ]);
    },
  ],
};
