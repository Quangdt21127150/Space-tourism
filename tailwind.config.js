/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        inactive: "var(--inactive)",
        opaque: "var(--opaque)",
        hover: "var(--hover)",
      },
      borderColor: {
        primary: "var(--border)"
      },
      fontSize: {
        sub: "0.875rem",
        "lg-h1": "9.375rem",
        "lg-h2": "6.25rem",
        "lg-h3": "3.5rem",
        "lg-h4": "2rem",
        "lg-h5": "1.75rem",
        "md-h1": "9.375rem",
        "md-h2": "5rem",
        "md-h3": "2.5rem",
        "md-h4": "1.5rem",
        "md-h5": "1.25rem",
        "md-p": "1rem"
      },
      fontFamily: {
        primary: ["Barlow", "sans-serif"],
        "primary-condensed": ["Barlow Condensed", "sans-serif"],
        secondary: ["Bellefair", "serif"],
      },
      letterSpacing: {
        nav: "0.169rem",
        "md-h5": "0.211rem",
        subhead: "0.147rem",
        lg: "0.295rem"
      },
      spacing: {
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
        25: "6.25rem",
        26: "6.5rem",
        29: "7.25rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        63: "15.75rem",
        129: "32.25rem",
        "mobile-button": "9.375rem",
        "tablet-button": "15.125rem",
        "desktop-button": "17.125rem",
      },
      leading: {
        md: "1.75rem",
        lg: "2rem"
      },
      backgroundImage: {
        "home-mobile": "url('/space-tourism-website/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/space-tourism-website/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/space-tourism-website/assets/home/background-home-desktop.jpg')",
        "destination-mobile": "url('/space-tourism-website/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet": "url('/space-tourism-website/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop": "url('/space-tourism-website/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/space-tourism-website/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/space-tourism-website/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/space-tourism-website/assets/crew/background-crew-desktop.jpg')",
        "technology-mobile": "url('/space-tourism-website/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet": "url('/space-tourism-website/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop": "url('/space-tourism-website/assets/technology/background-technology-desktop.jpg')",
      },
      screens: {
        "lg": "1440px"
      },
      height: {
        planet: "10.625rem",
        ["planet-tablet"]: "18.75rem",
        ["planet-desktop"]: "27.75rem",
        crew: "13.875rem",
        "md-crew": "33.25rem",
        "nav-dot": "0.625rem",
        "lg-nav-dot": "0.938rem",
        15: "3.75rem",
        tiny: "1px"
      },
      width: {
        planet: "10.625rem",
        ["planet-tablet"]: "18.75rem",
        ["planet-desktop"]: "27.75rem",
        "nav-dot": "0.625rem",
        "lg-nav-dot": "0.938rem",
        "smallest-screen": "600px",
        15: "3.75rem",
        112: "28rem",
        113: "28.25rem",
        118: "29.5rem",
        207: "51.75rem",
      },
      maxWidth: {
        103: "25.75rem",
        111: "27.75rem",
        112: "28rem",
        114: "28.5rem",
        143: "35.75rem",
        148: "37rem",
        122: "30.5rem",
        153: "38.25rem",
        154: "38.5rem",
        277: "69.25rem",
      },
      maxHeight: {
        150: "37.5rem",
        152: "38rem",
        158: "39.5rem",
        178: "44.5rem",
      },
      minHeight: {
        118: "29.5rem",
        175: "43.75rem",
        176: "44rem",
      },
      minWidth: {
        56: "14rem",
        112: "28.125rem",
      },
      borderWidth: {
        3: "3px"
      },
      gap: {
        13: "3.25rem",
        20: "5rem",
        30: "7.5rem",
        39: "9.75rem",
        desktop: "24.125rem"
      },
      opacity: {
        17: "0.17"
      },
      backdropBlur: {
        tiny: "1px"
      },
      inset: {
        "nav-accent": "50rem"
      },
      boxShadow: {
        "outline": "0 0 0 88px rgba(255, 255, 255, 0.1)"
      },
    },
  },
  plugins: [],
}