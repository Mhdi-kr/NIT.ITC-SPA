import { Router } from 'express';
import DataController from '../controller/data/controller';

const DATA_ROUTER = Router();

DATA_ROUTER.get('/status', DataController.getServerState);

export default DATA_ROUTER;