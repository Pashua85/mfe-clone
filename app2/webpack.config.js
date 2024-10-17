const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe2', // название модуля

  exposes: {
    './Module': './src/app/mfe2/mfe2.module.ts', // экспорт модуля
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "common-mfe": { singleton: true, strictVersion: true, requiredVersion: '0.0.1' }
  },

});
