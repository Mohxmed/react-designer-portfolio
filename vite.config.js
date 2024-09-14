import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@styles": resolve(__dirname, "src/styles"),
      "@assets": resolve(__dirname, "src/assets"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@data": resolve(__dirname, "src/data"),
      "@pages": resolve(__dirname, "src/pages"),
    },
  },
});
