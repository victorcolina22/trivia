/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "#3b55cd",
        "custom-purple": "#3D2699",
        "custom-purple-dark": "#23126A",
        "purple-light": "#D7CDFF",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(156, 132, 248, 1) 0%, rgba(71, 48, 164, 1) 100%)",
      },
      borderColor: {
        purple: "#3D2699",
      },
      colors: {
        "purple-dark": "#23126A",
      },
    },
    screens: {
      "3xl": "1920px",
    },
  },
  plugins: [],
};
