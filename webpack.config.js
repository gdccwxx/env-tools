const path = require('path');
const webpack = require('webpack');
const libName = 'envTools';
const outputFileName = 'env-tools';
const isEnvProduction = process.env.NODE_ENV === 'production';
const isRelease = process.env.RELEASE_TYPE === 'release';
const FileManagerPlugin = require('filemanager-webpack-plugin');

const libraryConfig = {
  name: libName,
  type: 'umd',
  umdNamedDefine: true,
};

module.exports = {
  mode: isEnvProduction ? 'production' : 'development',
  entry: {
    index: './src/index.ts',
  },
  target: ['web', 'es5'],
  output: {
    path: path.resolve(__dirname, 'build'),
    // library: libName,
    // libraryTarget: 'umd',
    // umdNamedDefine: true,
    globalObject: 'this',
    library: libraryConfig,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    isRelease
      ? new FileManagerPlugin({
        events: {
          onEnd: {
            copy: [
              {
                source: path.resolve(__dirname, './build/index.js'),
                destination: path.resolve(__dirname, `./release/${outputFileName}-${process.env.npm_package_version}.js`),
              },
              {
                source: path.resolve(__dirname, './build/index.js'),
                destination: path.resolve(__dirname, `./release/${outputFileName}-latest.js`),
              },
            ],
          },
        },
      })
      : undefined,
    new webpack.DefinePlugin({
      'process.env.PACKAGE_VERSION': JSON.stringify(
        process.env.npm_package_version
      ),
      'process.env.RELEASE_DATE': JSON.stringify(getTimestamp()),
    }),
  ].filter(Boolean),
};

function getTimestamp() {
  const date = new Date();
  const YYYY = date.getFullYear().toString().padStart(4, '0');
  const MM = date.getMonth().toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  const hh = date.getHours().toString().padStart(2, '0');
  const mm = date.getMinutes().toString().padStart(2, '0');
  const ss = date.getSeconds().toString().padStart(2, '0');
  const ms = date.getMilliseconds().toString().padStart(3, '0');
  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}.${ms}`;
}
