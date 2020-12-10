import fs from 'fs';
import path from 'path';
import { Status } from '../../@types/status';

class DataService {

    loadServerData(): Status {
        const serverData = fs.readFileSync(path.join(__dirname, '../../../assets/status.json'), 'utf-8');
        return JSON.parse(serverData);
    }

}

export default (new DataService());