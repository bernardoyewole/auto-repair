module.exports = {
  content: [
    './index.html',
    './script/**/*.js',
    './style/**/*.css',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/auto-repair/assets/img/repair-bg.jpg')",
        'bg-2': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}
