import { RequestHandler } from 'express';
import NewsService from './service';
import ExtendedRequest from '../../@types/request';

class NewsController {

    addNews: RequestHandler = async (req: ExtendedRequest, res) => {
        try {
            const dbResponse = await NewsService.addNews(req.user!, req.body);
            return res.status(201).send(dbResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    getNews: RequestHandler = async (req: ExtendedRequest, res) => {
        try {
            console.log(req.query);
            const dbResponse = await NewsService.getNews(req.query);
            return res.status(201).send(dbResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

}

export default (new NewsController());