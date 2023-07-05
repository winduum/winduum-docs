import { defineConfig } from 'vite'
import {resolve} from "node:path";

export default defineConfig({
  server: {
    port: 5174
  },
  resolve: {
    alias: {
      '@': './'
    }
  }
})
