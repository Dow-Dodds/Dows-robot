import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(30, 24%, 92%)',
        orange: 'hsl(14, 75%, 54%)',
        bluegrey: 'hsl(186, 18%, 70%)',
        black: 'hsl(0, 0%, 13%)',
        border: 'hsl(30, 24%, 92%)',
        white: 'hsl(60, 0%, 97%)',
      },
      fontFamily: {
        headings: ["Montserrat", "sans-serif"],
       
      }, 
      rotate: {
        '0': '0deg',
        '90': '90deg',
        '180': '180deg',
        '270': '270deg',
      },
    },
  },
  plugins: [],
};
export default config;
