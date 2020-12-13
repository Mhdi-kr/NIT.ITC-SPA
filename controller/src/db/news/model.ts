import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

class News extends Model {
    public id!: number;
    public title!: string;
    public article!: string;
    public main_image!: string;
    public inner_images!: string | string[];
    public views!: number;
}

News.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    article: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    main_image: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    inner_images: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: null
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'news',
    sequelize: connection,
    collate: 'utf8_bin'
});

export default News;