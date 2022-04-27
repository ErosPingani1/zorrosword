module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'bodoni': ['Libre Bodoni', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
};
 