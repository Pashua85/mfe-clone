# Инструкция по добавлению микрофронта

1. Создание приложения: `ng new [название] --routing --style=scss`

2. Установить пакет для микрофронта: `npm install @angular-architects/module-federation@15 --save`

3. Подключить микрофронт: `ng add @angular-architects/module-federation --project [название] --type remote --port [номер порта]`

4. Подключить хост в приложении хоста: `ng add @angular-architects/module-federation --project orchestrator --type host --port [номер порта]`

5. Изменить настройки webpack.config.js

```
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: [название], // название модуля

  exposes: {
    './Module': './src/app/[название]/[название].module.ts', // экспорт модуля
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },

});
```

6. В оркестраторе нужно дополнить файл для типизации микрофронта orchestrator/src/decl.d.ts

```
...
declare module '[название]/Module';
...
```

7. Создать модуль который планировали экспортировать и роут: `ng generate module [название] --route [название] --module app.module`

8. Подключить общую библиотеку `npm link common-mfe`

9. Добавить библиотеку как общую: webpack.config.js

```
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "common-mfe": { singleton: true, strictVersion: true, requiredVersion: '0.0.1' }
  },
```

10. В файле `init-script.js`, находящемся в корневом каталоге, необходимо добавить изменения в скрипт для установки проекта:
```
  ...
    try {
        // Установка всех зависимостей
        ...
        await runCommand('cd [название] && npm install', 'Installing dependencies for [название]');
        ...

        // Линковка библиотеки во всех приложениях
        ...
        await runCommand('cd [название] && npm link common-mfe', 'Linking common-mfe in [название]');
        ...
    } ...
```

11. В файле `package.json`, находящемся в корневом каталоге, необходимо добавить скрипт для запуска микрофронта:
```
  scripts: {
    ...
    "begin:[название]": "cd [название] && npm run start",
    ...
  }
```
