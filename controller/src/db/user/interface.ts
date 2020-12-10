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

    async edit(target: number | User, input: UserType): Promise<User> {
        if (target instanceof User) {
            await target.update(input);
            return target;
        }
        const foundTarget = await User.findByPk(target);
        if (!foundTarget) {
            throw 'Didn\'t find anything to update';
        }
        await foundTarget.update(input);
        return foundTarget;
    }

    async remove(target: number): Promise<User> {
        const found = await User.findByPk(target);
        if (!found) {
            throw 'Didn\'t find anything to update';
        }
        await found.destroy();
        return found;
    }
}

export default (new UserInterface());