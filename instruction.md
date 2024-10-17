Создание приложения: `ng new app2 --routing --style=scss`

Установить пакет для микрофронта: `npm install @angular-architects/module-federation@15 --save`

Подключить микрофронт: `ng add @angular-architects/module-federation --project app2 --type remote --port 4202`

Подключить хост в приложении хоста: `ng add @angular-architects/module-federation --project orchestrator --type host --port 4200`

Настройки webpack.config.js

```
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe2', // название модуля

  exposes: {
    './Module': './src/app/mfe2/mfe2.module.ts', // экспорт модуля
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },

});
```

В оркестраторе нужно создать в папке файл для типизации микрофронта orchestrator/src/decl.d.ts

```
declare module 'mfe1/Module';
declare module 'mfe2/Module';
```

Создать модуль который планировали экспортировать и роут: `ng generate module mfe2 --route mfe2 --module app.module`

Подключить общую библиотеку `npm link common-mfe`

Добавить библиотеку как общую: webpack.config.js

```
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "common-mfe": { singleton: true, strictVersion: true, requiredVersion: '0.0.1' }
  },
```
