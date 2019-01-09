const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      // modules: false,
    },
  ],
  '@babel/preset-react',
];

const plugins = [
  '@babel/plugin-transform-arrow-functions',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-syntax-dynamic-import',
];

module.exports = { presets, plugins };
