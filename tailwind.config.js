/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        moonlight: ['Moonlight', 'sans-serif'],
        moonbold: ['Moonbold', 'sans-serif'],
        calibri: ['calibri', 'sans-serif'],
        futur: ['futur', 'sans-serif'],
        segoe: ['segoe','sans-serif'],
        helvetica: ['helvetica', 'sans-serif'],
        helveticabold: ['helveticabold', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
        roboto: ['roboto', 'sans-serif'],
        master: ['master','sans-serif'],
        poppinsbold: ['poppinsbold', 'sans-serif'],
        poppinss: ['poppinss', 'sans-serif']
      }
    },
  },
  plugins: [],
}

