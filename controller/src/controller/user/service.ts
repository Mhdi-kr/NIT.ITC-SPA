import UserType from '../../@types/user';
import UserInterface from '../../db/user/interface';
import User from '../../db/user/model';
import bcrypt from 'bcryptjs';
import Error from '../../utils/Error';

class UserService {

    async register(input: UserType): Promise<User> {
        const dbResponse = await UserInterface.addUser(input);
        return dbResponse;
    }


    async login(input: UserType) {
        const providedPassword = input.password!;
        delete input.password;
        const dbResponse = await UserInterface.getUser(input) as User;
        if (!bcrypt.compareSync(providedPassword, dbResponse.password)) {
            throw new Error({
                code: 403,
                message: 'Password is incorrect'
            });
        }
        return dbResponse;
    }

    async edit(target: number | User, input: UserType): Promise<User> {
        if (input.password) {
            input.password = bcrypt.hashSync(input.password, 8);
        }
        const dbResponse: User = await UserInterface.edit(target, input);
        return dbResponse;
    }
    
    async remove(target: number): Promise<User> {
        return await UserInterface.remove(target);
    }
}

export default (new UserService());