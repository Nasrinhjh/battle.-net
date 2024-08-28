/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Ensure to include all HTML files in subdirectories
    "./src/**/*.{js,jsx,ts,tsx}" // Include JavaScript/TypeScript files if applicable
  ],
  theme: {
    extend: {
      // Add custom theme extensions here if needed
    },
  },
  daisyui: {
    themes: [
      "dracula",
      "synthwave"
    ],
  },
  plugins: [
    require("daisyui"),
    // Add other plugins here if needed
  ],
}