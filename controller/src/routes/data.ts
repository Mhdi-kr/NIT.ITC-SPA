import { Router } from 'express';
import Multer from '../middleware/Multer';
import DataController from '../controller/data/controller';

const DATA_ROUTER = Router();

DATA_ROUTER.get('/status', DataController.getServerState);

DATA_ROUTER.post('/contact', DataController.addContactMessage);

DATA_ROUTER.post('/cv', Multer, DataController.uploadCv);

export default DATA_ROUTER;