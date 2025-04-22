import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lab5-ci-cd/", // замініть на назву вашого репозиторію на GitHub
});
