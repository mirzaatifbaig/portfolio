import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import svgr from 'vite-plugin-svgr'

import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss(), svgr(), visualizer()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
