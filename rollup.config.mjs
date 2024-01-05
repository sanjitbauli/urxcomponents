import commonjs from "@rollup/plugin-commonjs";
// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
// const requireFile = createRequire(import.meta.url);
import packageJson from './package.json' assert { type: 'json' };

// const packageJson = requireFile('./package.json');
const path = require('path');
// const dts = require('rollup-plugin-dts')


export default [{
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
  //    include: path.resolve('node_modules')
  }),
    typescript(),
    postcss({
      use: [
        ['sass', {
          includePaths: [path.resolve('node_modules')]
        }]
      ]
    })
  ]
}, {
  input: 'lib/index.d.ts',
  output: [{ file: 'lib/index.d.ts', format: 'es' }],
  plugins: [dts.default()],
  external: [/\.scss$/],
}];