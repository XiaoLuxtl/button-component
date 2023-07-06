/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#e0e0e0",
        "default-hover": "#aeaeae",
        primary: "#2962ff",
        "primary-hover": "#0039cb",
        secondary: "#455a64",
        "secondary-hover": "#1c313a",
        danger: "#d32f2f",
        "danger-hover": "#9a0007",
        "theme-gray": "#3e3e3e",
      },
    },
  },
  plugins: [],
};
