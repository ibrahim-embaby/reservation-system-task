/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
];
export const theme = {
  extend: {
    colors: {
      primary: "#7ED0D9",
      "light-primary": "#E8F6F8",
      "primary-text-color": "#014B56",
      "secondary-text-color": "#287F89",
      "doctor-item-color": "#BFE7EC",
      "dark-text-color": "#2E2E2E",
    },
    fontFamily: {
      lora: ["Lora", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      rosarivo: ["Rosarivo", "serif"],
      roboto: ["Roboto", "sans-serif"],
      "work-sans": ["Work Sans, sans-serif"],
    },
  },
};
export const plugins = [];
