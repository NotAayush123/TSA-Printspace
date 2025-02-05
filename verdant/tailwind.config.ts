const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#22c55e",
        lightBrown: "#854d0e",
        brown: "#713f12",
        accent: "#fd9a00",
      },
      fontFamily: {
        display: ["Poppins", "Arial", ...defaultTheme.fontFamily.sans],
        body: ["Inter", "Arial", ...defaultTheme.fontFamily.sans],
        lead: ["League Spartan", "Arial", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    addVariablesForColors,
    // Add other plugins here if needed
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
