import App from './app';
import chalk from 'chalk';

const PORT = process.env.PORT || 9090;

App.listen(PORT, async () => {
    console.log(chalk.bgGreenBright.black.bold(`Express Server Is Running On Port ${PORT}`));
});