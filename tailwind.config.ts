import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,jsx,ts,tsx}",
    "./src/modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        metropolisBlack: ["metropolis-black", "sans-serif"],
        metropolisReguler: ["metropolis-reguler", "sans-serif"],
        metropolisBold: ["metropolis-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
