/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "customFont": "myFont"
      },
      colors: {
        "altNeutral_0": "hsl(0, 0%, 100%)",
        "altNeutral_300": "hsl(252, 6%, 83%)",
        "altNeutral_500": "hsl(245, 15%, 58%)",
        "altNeutral_700": "hsl(245, 19%, 35%)",
        "altNeutral_900": "hsl(248, 70%, 10%)",
        "altOrange_500": "hsl(7, 88%, 67%)",
        "altOrange_700": "hsl(7, 71%, 60%)",
      },
      backgroundImage: {
        'altBgLines': 'url("./src/assets/images/pattern-lines.svg")',
        'altGradient': 'linear-gradient(to right, hsl(7, 86%, 67%),hsl(0, 0%, 100%))',
        'altBgImg': 'url("./src/assets/images/background-desktop.png")',
        'altBgImgTab': 'url("./src/assets/images/background-tablet.png")',
        'altBgImgDesk': 'url("./src/assets/images/background-desktop.png")',
        'altBgImgSmall': 'url("./src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg")',
        'altBgImgBig': 'url("./src/assets/images/pattern-squiggly-line-bottom-desktop.svg")',
        'altBgCircles': 'url("./src/assets/images/pattern-circle.svg")',
        'ticketPattern': 'url("./src/assets/images/pattern-ticket.svg")',
      },
    },
  },
  plugins: [],
}

