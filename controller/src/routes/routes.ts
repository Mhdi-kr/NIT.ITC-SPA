import { Router } from 'express';
import USER_ROUTER from './user';

const ROUTES = Router();

ROUTES.use('/user', USER_ROUTER);


export default ROUTES;