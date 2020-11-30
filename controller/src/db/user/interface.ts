import UserType from '../../@types/user';
import Error from '../../utils/Error';
import User from './model';

class UserInterface {

    async addUser(input: UserType): Promise<User> {
        const createdUser = await User.create(input);
        return createdUser;
    }

    async getUser(input: UserType): Promise<User> {
        const foundOne = await User.findOne({
            where: {
                ...input
            }
        });
        if (!foundOne) {
            throw new Error({
                code: 404,
                message: 'Didn\'t find anything with that input'
            });
        }
        return foundOne;
    }

}

export default (new UserInterface());