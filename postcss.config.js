const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
      content: ["./components/**/*.js,jsx", "./pages/**/*.js,jsx"],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
        return broadMatches.concat(innerMatches);
      },
    },
  ];
  module.exports = {
    plugins: [
      "postcss-import",
      "tailwindcss",
      "autoprefixer",
      ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    ],
  };
  