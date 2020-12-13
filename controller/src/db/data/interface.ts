import DataType from '../../@types/data';
import Data from './model';

class DataInterface {

    async addContactMessage(input: DataType): Promise<Data> {
        return await Data.create(input);
    }

}

export default (new DataInterface());