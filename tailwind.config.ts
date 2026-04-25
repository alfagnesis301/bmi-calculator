import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        muted: "#5f6d7a",
        panel: "#ffffff",
        mist: "#f4f8f8",
        teal: {
          50: "#ecfdfb",
          100: "#d2f7f1",
          500: "#0f9f8f",
          600: "#087f73",
          700: "#09645d"
        },
        coral: "#e86f56",
        amber: "#c9851a",
        violet: "#6d5bd0"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 33, 43, 0.10)",
        line: "0 1px 0 rgba(23, 33, 43, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
