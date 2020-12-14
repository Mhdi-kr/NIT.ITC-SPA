import { Router } from 'express';
import NewsController from '../controller/news/controller';
import Auth from '../middleware/Auth';

const NEWS_ROUTER = Router();

NEWS_ROUTER.post('/add', Auth.middleware, NewsController.addNews);

NEWS_ROUTER.get('/', NewsController.getNews);

export default NEWS_ROUTER;