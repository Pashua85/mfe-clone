const { exec } = require('child_process');

// Утилита для выполнения команд
async function runCommand(command, description) {
    const chalk = (await import('chalk')).default;  // Динамический импорт chalk

    console.log(chalk.blue.bold(`\n--- ${description} ---\n`));  // Выделяем сообщение с помощью chalk
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(chalk.red(`Error: ${error.message}`));
                return reject(error);
            }
            if (stderr) {
                console.error(chalk.yellow(`Standard Error: ${stderr}`));
            }
            console.log(chalk.green(stdout));  // Выводим результат команды зелёным цветом
            resolve();
        });
    });
}

// Основная логика
async function init() {
    try {
        // Установка всех зависимостей
        await runCommand('cd app1 && npm install', 'Installing dependencies for app1');
        await runCommand('cd app2 && npm install', 'Installing dependencies for app2');
        await runCommand('cd common-mfe && npm install', 'Installing dependencies for common-mfe');
        await runCommand('cd orchestrator && npm install', 'Installing dependencies for orchestrator');

        // Сборка и линковка библиотеки
        await runCommand('cd common-mfe && npm run build', 'Building common-mfe');
        await runCommand('cd common-mfe && npm link', 'Linking common-mfe');

        // Линковка библиотеки во всех приложениях
        await runCommand('cd app1 && npm link common-mfe', 'Linking common-mfe in app1');
        await runCommand('cd app2 && npm link common-mfe', 'Linking common-mfe in app2');
        await runCommand('cd orchestrator && npm link common-mfe', 'Linking common-mfe in orchestrator');
    } catch (error) {
        const chalk = (await import('chalk')).default;
        console.error(chalk.red('An error occurred during the initialization process:', error));
    }
}

// Запуск основного процесса
init();
