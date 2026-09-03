const { defineConfig } = require('vite');

module.exports = defineConfig({
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },

  server: {
    proxy: {
      '/quizzes': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
