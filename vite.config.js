import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';   // import dotenv package

// run package config
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [react()],
  // define process env
  define: {
    'process.env': process.env
  }
} );