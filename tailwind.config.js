/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        heading: ["Playfair Display","serif"],
        body: ["Montserrat","sans-serif"]
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        hotelTheme: {
          primary: "#0B132B",     // navy profundo
          secondary: "#C79400",   // dorado elegante
          accent: "#FFFFFF",
          neutral: "#F4F4F9",
          "base-100": "#FFFFFF",
        }
      }
    ]
  }
};
