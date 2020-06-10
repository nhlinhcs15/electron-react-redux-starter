module.exports = {
  productName: 'Electron React Starter',
  directories: {
    output: 'dist',
    buildResources: 'assets',
  },
  win: {
    icon: './public/logo512.png',
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
        // arch: ['x64', 'ia32'],
      },
    ],
  },
  files: ['build/**/*'],
};
