/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "360px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        /* DevZeppelin — Cyberpunk (marca principal) */
        primary: "#080808",
        secundary: "#16161e",
        yellow: "#F5D244",
        gray: "#545454",
        lightGray: "#c8c4c0",
        darkGray: "#1a1a28",
        lowContrast: "#f0e870",
        cyberBlue: "#00d4ff",
        cyberMid: "#0f0f18",

        /* Blog */
        primaryBlog: "#0e364e",
        secundaryBlog: "#13a89e",
        lowContrastBlog: "#117F77",
        backgroundBlog: "#d6d4d4",
        backgroundSecundaryBlog: "#608b9b",

        /* Portafolio / legacy (usado aún por components/blog/Layout) */
        transparent: "transparent",
        current: "currentColor",
        white: "#F8F1F1",
        green: "#16C79A",
        lgreen: "#6eeccd",
        dark: "#19456B",
        bluePF: "#11698E",

        /* Alma Rockera */
        alma1: "#e45826",
        alma2: "#ff4301",
        alma3: "#2F2519",
        alma4: "#4A3F35",
      },
      fontFamily: {
        body: ["Sarabun", "sans-serif"],
        heading: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        "hero-big": "url('/01.webp')",
        "hero-bigger": "url('/bgImage.webp')",
        "hero-pages": "url('/bgPages.webp')",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
    grayscale: {
      100: "100%",
    },
  },
  plugins: [],
};
