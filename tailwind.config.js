const { secondary } = require('daisyui/src/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      
        {
          dark: {
          
            "primary": "#2b1c7c",
                     
            "secondary": "#5430f4",
                     
            "accent": "#64ce56",
                     
            "neutral": "#382338",
                     
            "base-100": "#2E3542",
                     
            "info": "#74B4EC",
                     
            "success": "#168345",
                     
            "warning": "#CF910C",
                     
            "error": "#E78474",
                     
        },
        doctorstheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",

        },
        

      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
