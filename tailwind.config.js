/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rrlablack: '#212731',
        rrlawhite: '#D1D6DA',
        rrlablue: '#F3F9FF',
        rrlablue1: '#1B88F4',
        rrlaorange: '#FF7724',
        rrladarkblue: '#074786',
        rrlared: '#FFF4ED',
        rrlagray: '#626E79',
        rrlafooterbg: '#212731',
      },
      fontFamily: {
        font1: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

