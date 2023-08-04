import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "react-library-template",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                sourcemap: true,
            },
            external: ["react/jsx-runtime"],
            plugins: [resolve(), typescript()],
        }
    }
});
