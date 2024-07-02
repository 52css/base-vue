import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "BaseVue",
      fileName: (format) => `base-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", 'tdesign-vue-next', 'tdesign-icons-vue-next'],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
