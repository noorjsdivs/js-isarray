import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

export default [
  // CommonJS build
  {
    input: "src/index.ts",
    output: {
      file: pkg.main,
      format: "cjs",
      exports: "auto",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        declaration: true,
        declarationDir: "dist",
        rootDir: "src",
      }),
    ],
  },
  // ES Module build
  {
    input: "src/index.ts",
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        declaration: false,
        rootDir: "src",
      }),
    ],
  },
];
