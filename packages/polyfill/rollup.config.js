import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

const dependencies = Object.keys(require('./package.json').dependencies);

const extensions = ['.js', '.ts', '.mjs'];

process.env.NODE_ENV = 'production';

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // the `targets` option which can specify `dest` and `format`)
  {
    input: 'src/index.ts',
    external: dependencies,
    output: [
      { file: pkg.main, format: 'cjs' },
      //{ file: pkg.module, format: 'es' },
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**'],
        rootMode: 'upward',
        extensions,
        runtimeHelpers: true,
      }),
      commonjs({ extensions }),
    ],
  },
];
