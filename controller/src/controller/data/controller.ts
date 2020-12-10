import { RequestHandler } from 'express';
import { Status } from '../../@types/status';
import DataService from './service';

class DataController {

    getServerState: RequestHandler = async (req, res) => {
        try {
            const status: Status = DataService.loadServerData();
            return res.status(200).send(status);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

}

export default (new DataController());