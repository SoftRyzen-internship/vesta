import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXl: { max: "1279.98px" },
    },
    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "3.5rem",
          xl: "2rem",
        },
      },
      // COLORS
      colors: {
        "color-text": {
          primary: "#FFFFFF",
        },
        "color-accent": {
          main: "#F2600C",
          hover: "#F97816",
          extra: "#C4B3A9",
        },
        "color-modal": {
          heading: "#1A341B",
          text: "#4A4742",
          desc: "#8B8B8B",
          backdrop: "rgba(0, 0, 0, 0.8)",
          background: "#fff",
          stroke: "#929292",
          pseudo: "#C1C1C1",
        },
        "color-bg": "#0D0D0D",
      },
      // FONTS
      fontFamily: {
        eUkraine: ["var(--font-eUkraine)"],
      },
      // TRANSITION
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
