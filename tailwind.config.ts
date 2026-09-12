import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0D1420",
          soft: "#141E2E",
          card: "#1A2638",
          line: "rgba(255,255,255,0.10)",
        },
        paper: {
          DEFAULT: "#F8F7F3",
          soft: "#F0EFE9",
          line: "rgba(13,20,32,0.10)",
        },
        accent: {
          DEFAULT: "#0B93D8",
          dim: "#0876B0",
          ink: "#FFFFFF",
        },
        brand: {
          orange: "#F39200",
          orangedark: "#D97E00",
          sky: "#E8F5FC",
          sun: "#FEF3E2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(13,20,32,0.04), 0 8px 24px rgba(13,20,32,0.06)",
        lift: "0 4px 8px rgba(13,20,32,0.05), 0 20px 48px rgba(13,20,32,0.12)",
      },
      animation: {
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
