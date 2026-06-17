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
        primary: "#0F0F0F",
        secondary: "#FFFFFF",
        accent: "#D4AF37",
        "accent-dark": "#B8962E",
        "accent-light": "#E5C964",
        surface: "#1E1E1E",
        "surface-light": "#2A2A2A",
        "surface-lighter": "#333333",
        muted: "#999999",
        "muted-light": "#CCCCCC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.3" }],
        "heading-md": ["1.5rem", { lineHeight: "1.35" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 20px 10px rgba(212, 175, 55, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F2D06B 50%, #D4AF37 100%)",
        "dark-gradient": "linear-gradient(180deg, rgba(15,15,15,0) 0%, rgba(15,15,15,0.8) 50%, rgba(15,15,15,1) 100%)",
        "hero-overlay": "linear-gradient(180deg, rgba(15,15,15,0.3) 0%, rgba(15,15,15,0.7) 50%, rgba(15,15,15,0.95) 100%)",
        "card-gradient": "linear-gradient(180deg, transparent 0%, rgba(15,15,15,0.9) 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
