import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000 // Set the port to 3000
  },
  plugins: [react(), tailwindcss()],
  esbuild: {
    loader: "jsx", // This tells Vite to use the JSX loader for .js files
  },
});
