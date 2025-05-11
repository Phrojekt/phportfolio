import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["var(--font-jetbrains)"],
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(332.59% 116.54% at 12.17% 15.34%, #1A1A1B 0%, #1B1A1A 76.92%, #302F2F 90.35%, #464646 100%)",
      },
      fontSize: {
        "hero-title": ["48px", "1.2"],
      },
    },
  },
  plugins: [],
};

export default config;
