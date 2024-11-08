import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "3rem",
      },
    },
    extend: {
      screens: {
        retina: {
          raw: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        mun: {
          green: "#034927",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
      },
      boxShadow: {
        "1": "0px 1px 2px 0px #0000004d, 0px 1px 3px 1px #00000026",
        "2": "0px 1px 2px 0px #0000004d, 0px 2px 6px 2px #00000026",
        "3": "0px 1px 3px 0px #0000004d, 0px 4px 8px 3px #00000026",
        "4": "0px 1px 5px 0px #0000004d, 0px 5px 20px 6px #00000026",
      },
      typography: ({ theme }: any) => ({
        heading: {
          css: {
            marginBottom: "0.5rem",
            fontWeight: 600,
            lineHeight: "1.2",
            letterSpacing: "-.03rem",
          },
        },
        display: {
          css: {
            fontWeight: 700,
            lineHeight: "1.2",
          },
        },
        body: {
          css: {
            marginBottom: "1rem",
          },
        },
        lead: {
          css: {
            fontSize: "1rem",
            fontWeight: 500,
            marginBottom: "1rem",
          },
        },
        small: {
          css: {
            fontSize: "14px",
            lineHeight: "1.4em",
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")({
      className: "mun",
    }),
    plugin(function ({ addBase, addComponents, addUtilities, theme }: any) {
      addBase({
        ".heading-1": {
          fontSize: "calc(1.34375rem + 1.125vw)",
          "@screen xl": {
            fontSize: "2.1875rem",
          },
        },
        ".heading-2": {
          fontSize: "calc(1.3rem + .6vw)",
          "@screen xl": {
            fontSize: "1.75rem",
          },
        },
        ".heading-3": {
          fontSize: "calc(1.27813rem + .3375vw)",
          "@screen xl": {
            fontSize: "1.53125rem",
          },
        },
        ".heading-4": {
          fontSize: "calc(1.25625rem + .075vw)",
          "@screen xl": {
            fontSize: "1.3125rem",
          },
        },
        ".heading-5": {
          fontSize: "1.09375rem",
        },
        ".heading-6": {
          fontSize: ".875rem",
        },
        ".display-1": {
          fontSize: "calc(1.625rem + 4.5vw)",
          "@screen xl": {
            fontSize: "5rem",
          },
        },
        ".display-2": {
          fontSize: "calc(1.575rem + 3.9vw)",
          "@screen xl": {
            fontSize: "4.5rem",
          },
        },
        ".display-3": {
          fontSize: "calc(1.525rem + 3.3vw)",
          "@screen xl": {
            fontSize: "4rem",
          },
        },
        ".display-4": {
          fontSize: "calc(1.475rem + 2.7vw)",
          "@screen xl": {
            fontSize: "3.5rem",
          },
        },
        ".display-5": {
          fontSize: "calc(1.425rem + 2.1vw)",
          "@screen xl": {
            fontSize: "3rem",
          },
        },
        ".display-6": {
          fontSize: "calc(1.375rem + 1.5vw)",
          "@screen xl": {
            fontSize: "2.5rem",
          },
        },
      });
      addComponents({});
      addUtilities({
        ".skeleton-heading-1": {
          height: "calc(1.34375rem + 1.125vw)",
          "@screen xl": {
            height: "2.1875rem",
          },
        },
        ".skeleton-heading-2": {
          height: "calc(1.3rem + .6vw)",
          "@screen xl": {
            height: "1.75rem",
          },
        },
        ".skeleton-heading-3": {
          height: "calc(1.27813rem + .3375vw)",
          "@screen xl": {
            height: "1.53125rem",
          },
        },
        ".skeleton-heading-4": {
          height: "calc(1.25625rem + .075vw)",
          "@screen xl": {
            height: "1.3125rem",
          },
        },
        ".skeleton-heading-5": {
          height: "1.09375rem",
        },
        ".skeleton-heading-6": {
          height: ".875rem",
        },
        ".skeleton-display-1": {
          height: "calc(1.625rem + 4.5vw)",
          "@screen xl": {
            height: "5rem",
          },
        },
        ".skeleton-display-2": {
          height: "calc(1.575rem + 3.9vw)",
          "@screen xl": {
            height: "4.5rem",
          },
        },
        ".skeleton-display-3": {
          height: "calc(1.525rem + 3.3vw)",
          "@screen xl": {
            height: "4rem",
          },
        },
        ".skeleton-display-4": {
          height: "calc(1.475rem + 2.7vw)",
          "@screen xl": {
            height: "3.5rem",
          },
        },
        ".skeleton-display-5": {
          height: "calc(1.425rem + 2.1vw)",
          "@screen xl": {
            height: "3rem",
          },
        },
        ".skeleton-display-6": {
          height: "calc(1.375rem + 1.5vw)",
          "@screen xl": {
            height: "2.5rem",
          },
        },
        ".skeleton-body": {
          height: "1rem",
        },
        ".skeleton-lead": {
          height: "1.09375rem",
        },
        ".skeleton-small": {
          height: "0.875rem",
        },
        ".skeleton-circle": {
          width: "48px",
          height: "48px",
          borderRadius: "100%",
        },
      });
    }),
  ],
};
export default config;
