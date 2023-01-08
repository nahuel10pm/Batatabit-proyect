/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'down-arrow': "url('../assets/icons/down-arrow.svg')",
      },
      backgroundColor:theme => ({
        ...theme("colors"),
        'primary': '#201e1c',
        'secondary': '#F7931A',
        'tertiary': '#61AEC9',
        'Off-White': '#FAF8F7',
      }),
      textColor:{
        'Bitcoin-Orange':'#F7931A',
        'Soft-Orange': '#FFE9D5',
        'Secondary-Blue': '#1A9AF7',
        'Soft-Blue': '#E7F5FF',
        'Warm-Black': '#201E1C',
        'Warm-Black+1': '#282623',
        'Grey': '#BABABA',
        'Off-White': '#FAF8F7',
        'Just-White': '#FFFFFF',

      },
      fontFamily:{
        DM:["DM Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}
