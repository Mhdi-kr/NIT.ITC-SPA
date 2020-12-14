import { RequestHandler } from 'express';
import { Status } from '../../@types/status';
import Data from '../../db/data/model';
import User from '../../db/user/model';
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

    addContactMessage: RequestHandler = async (req, res) => {
        try {
            const dbResponse = await DataService.addContactMessage(req.body);
            return res.status(201).send(dbResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);   
        }
    }

    uploadCv: RequestHandler = async (req, res) => {
        try {
            const dbResponse = await DataService.addContactMessage({ ...req.body, cv: req.file.destination.replace('./public/', '') + '/' + req.file.filename });
            return res.status(200).send(dbResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
}

export default (new DataController());