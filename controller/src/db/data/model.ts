import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

class Data extends Model {
    public id!: number;
    public subject!: string;
    public sender_info!: string;
    public message!: string;
    public cv!: string;
}

Data.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    subject: {
        type: DataTypes.TEXT
    },
    sender_email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    cv: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'data',
    sequelize: connection,
    collate: 'utf8_bin'
});

export default Data;