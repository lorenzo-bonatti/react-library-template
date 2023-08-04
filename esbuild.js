import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    treeShaking: true,
    plugins: [nodeExternalsPlugin()],
    format: "esm",
    outfile: "dist/index.js",
}).catch(() => process.exit(1));
