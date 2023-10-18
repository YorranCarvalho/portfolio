/** @type {import('tailwindcss').Config} */
export default  {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: "transparent",
      white: '#fff',
      black: '#000',
      grayContainer: '#292929',
      grayCard: '#151515',
      grayDcpt: '#999',

      royalBlue: {
        "50": "#8787fb",
        "100": "#6565ff",
        "200": "#4040fb",
        "300": "#0404e2",
        "400": "#0303b5",
      }
    }
  },
  plugins: [],
}