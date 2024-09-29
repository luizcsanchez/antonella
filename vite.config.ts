import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Escuta em todos os IPs disponíveis
    port: 5173, // A porta que você deseja usar
  },
});
