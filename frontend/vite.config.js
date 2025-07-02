import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/caps-store/',
  plugins: [react()],
  resolve: {
    alias: {
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
});
