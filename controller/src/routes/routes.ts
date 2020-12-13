import { Router } from 'express';
import USER_ROUTER from './user';
import DATA_ROUTER from './data';

const ROUTES = Router();

ROUTES.use('/user', USER_ROUTER);
ROUTES.use('/data', DATA_ROUTER);


export default ROUTES;