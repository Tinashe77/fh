import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary": "#ffffff",
        "surface-bright": "#f8f9fa",
        "surface": "#f8f9fa",
        "on-tertiary-fixed": "#400201",
        "surface-container-low": "#f3f4f5",
        "tertiary": "#000000",
        "inverse-primary": "#bfc2ff",
        "secondary-fixed": "#ffe086",
        "on-tertiary-fixed-variant": "#7c2d22",
        "surface-container-highest": "#e1e3e4",
        "on-tertiary-container": "#c96759",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "secondary": "#735c00",
        "on-surface": "#191c1d",
        "on-secondary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "primary": "#000000",
        "on-primary": "#ffffff",
        "surface-container": "#edeeef",
        "on-secondary-container": "#6e5700",
        "primary-container": "#030568",
        "primary-fixed": "#e0e0ff",
        "tertiary-container": "#400201",
        "surface-variant": "#e1e3e4",
        "on-surface-variant": "#464651",
        "on-background": "#191c1d",
        "outline": "#767683",
        "surface-container-high": "#e7e8e9",
        "surface-tint": "#5056ac",
        "surface-dim": "#d9dadb",
        "on-primary-fixed-variant": "#373d92",
        "on-error": "#ffffff",
        "on-primary-container": "#767cd5",
        "secondary-container": "#fdcc00",
        "on-secondary-fixed-variant": "#574500",
        "on-error-container": "#93000a",
        "outline-variant": "#c7c5d3",
        "secondary-fixed-dim": "#efc100",
        "tertiary-fixed-dim": "#ffb4a8",
        "inverse-surface": "#2e3132",
        "primary-fixed-dim": "#bfc2ff",
        "background": "#f8f9fa",
        "on-secondary-fixed": "#231a00",
        "tertiary-fixed": "#ffdad4",
        "inverse-on-surface": "#f0f1f2",
        "on-primary-fixed": "#030568"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(3, 5, 104, 0.08)',
        'glass-heavy': '0 20px 50px rgba(3, 5, 104, 0.15)',
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
