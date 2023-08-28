import path from "path";
import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/ts/app.ts'),
            name: 'Mainscript',
            fileName: 'js/mainscript'
          },
          rollupOptions: {
            output: {
              assetFileNames: "css/main.css",
            },
        },
        outDir: path.join(__dirname, "public"),
        sourcemap: true,
        manifest: true,
        watch: true,
        emptyOutDir: false,
    },
    publicDir: 'public/assets'
});