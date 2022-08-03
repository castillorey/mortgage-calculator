module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  plugins: [],
}