module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          // Specify your target browsers or environments here
          // For example:
          // browsers: ['last 2 versions', 'ie 11'] 
        },
        useBuiltIns: 'entry', // Or 'usage' 
        corejs: 3, 
      },
    ],
  ],
};