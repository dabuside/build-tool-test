import { defineConfig } from "vite";
import { resolve } from "node:path";

// const __dirname = import.meta.dirname;

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "./src/index.ts"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "my-lib",
    },
    target: "es2015",
  },
});
