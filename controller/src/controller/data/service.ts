import fs from 'fs';
import path from 'path';
import DataType from '../../@types/data';
import { Status } from '../../@types/status';
import Data from '../../db/data/model';
import DataInterface from '../../db/data/interface';

class DataService {

    loadServerData(): Status {
        const serverData = fs.readFileSync(path.join(__dirname, '../../../assets/status.json'), 'utf-8');
        return JSON.parse(serverData);
    }

    async addContactMessage(input: DataType): Promise<Data> {
        return await DataInterface.addContactMessage(input);
    }
}

export default (new DataService());