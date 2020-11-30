import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class User extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public nickname!: string;
    public phone_number!: string;
    public avatar!: string;
    public tokens!: string;
    public generateToken!: () => Promise<string>
    public deleteToken!: (token: string) => Promise<User>
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: new DataTypes.STRING(512),
        unique: true,
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(512),
        unique: true,
        allowNull: false,
    },
    nickname: {
        type: new DataTypes.STRING(512),
        allowNull: false,
    },
    password: {
        type: new DataTypes.TEXT,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.TEXT,
        defaultValue: ''
    },
    phone_number: {
        type: DataTypes.TEXT,
        defaultValue: ''
    },
    tokens: {
        type: DataTypes.JSON,
        defaultValue: '[]'
    }
}, {
    hooks: {
        beforeSave(User) {
            if (User.changed('password')) {
                const hashedPassword = bcrypt.hashSync(User.password, parseInt(process.env.REPEAT_ALG!) || 8);
                User.password = hashedPassword;
            }
        }
    },
    tableName: 'users',
    sequelize: connection,
    collate: 'utf8_bin'
});


User.prototype.generateToken = async function (): Promise<string> {
    const user = this;
    const token = jwt.sign({ uniqueId: user.id }, process.env.JWT_SECRET!, { expiresIn: 3600 * 24 * 7 });
    user.setDataValue('token', token);
    user.tokens = JSON.stringify([...JSON.parse(user.tokens), token]);
    await user.save();
    return token;
}

User.prototype.deleteToken = async function (token: string): Promise<User> {
    const user = this;
    const filteredList = JSON.parse(user.tokens).filter((savedToken: string) => savedToken !== token);
    user.tokens = JSON.stringify(filteredList);
    await user.save();
    return user;
}


User.prototype.toJSON = function (): object {
    const user: any = this;
    delete user.dataValues.password;
    delete user.dataValues.tokens;
    return user.dataValues;
}

export default User;