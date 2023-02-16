import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  build: {
    outDir: "docs"
  },
  plugins: [
    vue(),
    istanbul({
      cypress: true,
      requireEnv: false,
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    modules: {
      generateScopedName: isProduction.call(process.env.NODE_ENV)
        ? '[hash:base64:5]'
        : '[local]__[hash:base64:5]',
    }
  }  
});

function isProduction(this: any) {
  return this.toString() === 'production';
}
