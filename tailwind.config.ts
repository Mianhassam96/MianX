import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: {
          DEFAULT: "#111111",
          elevated: "#1a1a1a",
        },
        accent: {
          purple: "#8B5CF6",
          pink: "#EC4899",
        },
        muted: "#a1a1aa",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-accent":
          "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
      },
      animation: {
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "pulse-slow-delay": "pulse-slow 8s ease-in-out 4s infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(236, 72, 153, 0.4)",
          },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 30px rgba(139, 92, 246, 0.5)",
        "glow-pink": "0 0 30px rgba(236, 72, 153, 0.5)",
        "glow-accent":
          "0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
