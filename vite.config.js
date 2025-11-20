import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ Important: set the base path to your repo name
export default defineConfig({
  plugins: [react()],
  base: '/My_Portfolio/'  // <-- Add this
});
