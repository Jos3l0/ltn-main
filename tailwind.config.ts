import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: "#1C1D1E",
        gray: "#82949C",
        lightgray: "#E4E4E4",
        blue: "#197EF0",
        friolatina: "hsl(235, 73%, 51%)",
        friolatina_hover: "hsl(235, 73%, 30%)",
        acerolatina: "hsl(25, 100%, 50%)",
        acerolatina_hover: "hsl(25, 100%, 30%)",
        bervill: "hsl(212, 89%, 52%)",
        bervill_hover: "hsl(212, 89%, 32%)",
        simpletech: "hsl(21, 97%, 46%)",
        simpletech_hover: "hsl(21, 97%, 27%)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      aspectRatio: {
        "1": "1",
      },
      fontFamily: {
        sans: ["Golos Text", ...fontFamily.sans],
      },
      fontSize: {
        h2: "2rem",
        default: "1rem",
      },
      maxWidth: {
        limit: "1200px",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        autoRun: {
          "0%": { left: "100%" },
          "100%": { left: "calc(var(--width) * -1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        autoRun: "autoRun 35s linear infinite",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    plugin(
      // eslint-disable-next-line @typescript-eslint/unbound-method
      function (this: void, { addBase, theme }) {
        addBase({
          "*": { fontSize: theme("fontSize.default") }, // Aplica a todos los elementos
          h2: { fontSize: theme("fontSize.h2") }, // Específico para h2
        });
      },
    ),
  ],
};
