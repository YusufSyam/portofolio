/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      secondary: "#d4d3e7",
      error: "#FF2C56",
      "primary-text-1": "#212A31",
      "primary-text-2": "#334155",
      "secondary-text-500": "#808fa4",
      navy: "#124E66",
      "dark-grey": "#2E3944",
      grey: "#748D92",
      "light-grey": "#D3D9D4",
      "cream": "#F7E987",
      "fd-cream": "#FFF3C7",
      "fd-light-pink": "#FEC7B4",
      "fd-pink": "#FC819E",
      "fd-blue": "#96ccdc",
      "fd-dark-pink": "#F7418F"
    },
    fontFamily: {
      'poppins': [
        'poppins', 'sans-serif'
      ],
      'poppins-bold': [
        'poppins-bold', 'sans-serif'
      ],
      'poppins-light': [
        'poppins-light', 'sans-serif'
      ],
      'poppins-semibold': ['poppins-semibold', 'sans-serif'],
      'roboto': [
        'roboto', 'sans-serif'
      ],
      'roboto-bold': [
        'roboto-bold', 'sans-serif'
      ],
      'roboto-light': [
        'roboto-light', 'sans-serif'
      ],
      'roboto-semibold': ['roboto-semibold', 'sans-serif'],
      'alkatra': [
        'alkatra', 'sans-serif'
      ],
      'alkatra-semibold': [
        'alkatra-semibold', 'sans-serif'
      ],
      'alkatra-bold': ['alkatra-bold', 'sans-serif'],
      'quicksand': [
        'quicksand', 'sans-serif'
      ],
      'quicksand-semibold': [
        'quicksand-semibold', 'sans-serif'
      ],
      'quicksand-bold': ['quicksand-bold', 'sans-serif'],
      'dancing-script': [
        'dancing-script', 'sans-serif'
      ],
      'dancing-script-semibold': [
        'dancing-script-semibold', 'sans-serif'
      ],
      'dancing-script-bold': ['dancing-script-bold', 'sans-serif'],
      'great-vibes': ['great-vibes', 'sans-serif'],
      
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 20,
      "2xl": 24,
      "3xl": 28,
      "10xl": 80
    },
    letterSpacing: {
      "1": "0.001em",
      "2": "0.0015em",
      "3": "0.0025em",
      "4": "0.004em",
      "5": "0.01em",
    },
    dropShadow: {
      "1": "0px 1px 4px rgba(0, 0, 0, 0.12)",
      "2": "drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
    },
    extend: {
      backgroundImage: {
        'galeri': "url('../src/assets/images/galeri.jpg')",
        'background': "url('../src/assets/images/bg.jpg')",
        'background2': "url('../src/assets/images/bg2.jpg')",
      }
    },
  },
  plugins: [],
}

