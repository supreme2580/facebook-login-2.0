module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popout: {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.5)'
          }
        }
      },
      animation: {
        popout: 'popout 1s animation-iteration-count-1'
      }
    },
  },
  plugins: [],
}