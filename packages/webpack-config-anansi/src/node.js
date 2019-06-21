import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { ROOT_PATH } from './base/constants';

export default function makeNodeConfig(baseConfig, { serverDir }) {
  const config = { ...baseConfig };
  config.target = 'node';
  if (config.optimization) {
    config.optimization.minimize = false;
    config.optimization.splitChunks = {};
    config.optimization.runtimeChunk = false;
  }
  config.externals = [nodeExternals()];
  config.output.path = path.join(ROOT_PATH, serverDir);
  config.output.filename = '[name].js';
  config.output.chunkFilename = '[name].chunk.js';
  config.output.libraryTarget = 'commonjs2';

  return config;
}