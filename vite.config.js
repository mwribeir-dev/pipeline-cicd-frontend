import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: necessário para o GitHub Pages encontrar os arquivos.
  // Troque pelo nome EXATO do seu repositório, entre barras.
  base: "/pipeline-cicd-frontend/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
