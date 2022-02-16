import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/random-user-generator/",
  plugins: [vue()],
});
