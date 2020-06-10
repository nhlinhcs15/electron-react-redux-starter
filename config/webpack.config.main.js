const path = require('path');

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: './electron/main.ts',
    target: 'electron-main',
    node: {
      __dirname: false,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /electron/,
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
    output: {
      path: path.join(__dirname, '../build'),
      filename: 'electron.js',
    },
  };
};
