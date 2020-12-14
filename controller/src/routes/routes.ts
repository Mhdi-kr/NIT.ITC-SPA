import { Router } from 'express';
import USER_ROUTER from './user';
import DATA_ROUTER from './data';
import NEWS_ROUTER from './news';

const ROUTES = Router();

ROUTES.use('/user', USER_ROUTER);
ROUTES.use('/data', DATA_ROUTER);
ROUTES.use('/news', NEWS_ROUTER);


export default ROUTES;