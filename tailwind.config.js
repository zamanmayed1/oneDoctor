module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerbg': "url('https://i.ibb.co/NYbGY65/bg.png')",
        'apbg': "url('https://i.ibb.co/3SdTDpJ/appointment.png')",
        'testimbg': "url('https://i.ibb.co/xCXqV1j/Mask-Group-7-2x-1.png')",
        'footerbg': "url('https://i.ibb.co/3k2CJRt/repeated-square.webp')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}