import { Sequelize } from 'sequelize';

const connection = new Sequelize({
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE!,
    dialect: 'postgres',
    timezone: '+03:30'
});

// Dev Or Production Mode
if (!JSON.parse(process.env.DEV_MODE!)) {
    connection.sync({
        logging: false
    });
} else {
    connection.sync({
        force: true,
        logging: true
    });
}

export default connection;