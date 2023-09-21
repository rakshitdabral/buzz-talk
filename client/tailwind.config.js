export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(60,9,108,0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/hero-background.png') ",
        'login-pattern': "url('../src/assets/login-background.jpg')",
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
