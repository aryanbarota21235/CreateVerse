import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0F19",
          soft: "#111827",
          card: "#1A2233",
          line: "rgba(255,255,255,0.15)",
        },
        paper: {
          DEFAULT: "#F8FAFC",
          soft: "#F1F5F9",
          line: "rgba(11,15,25,0.14)",
        },
        accent: {
          DEFAULT: "#0284C7",
          dim: "#0369A1",
          ink: "#FFFFFF",
        },
        brand: {
          orange: "#EA580C",
          orangedark: "#C2410C",
          sky: "#E0F2FE",
          sun: "#FFEDD5",
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
        card: "0 2px 8px rgba(11,15,25,0.05), 0 1px 3px rgba(11,15,25,0.06)",
        lift: "0 8px 24px rgba(11,15,25,0.08), 0 2px 6px rgba(11,15,25,0.04)",
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
