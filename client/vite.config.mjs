import { defineConfig } from 'vite';

export default defineConfig({
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

  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
  },
});
