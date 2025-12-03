import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006CFF",
        primaryLight: "#E6F0FF",

        success: "#00C389",
        successLight: "#EFFFF8",

        danger: "#FF4D4F",
        dangerLight: "#FFF1F0",

        graySoft: "#F7F9FC",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};

export default config;
