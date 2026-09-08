import { defineConfig } from 'vite';

export default defineConfig({
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
