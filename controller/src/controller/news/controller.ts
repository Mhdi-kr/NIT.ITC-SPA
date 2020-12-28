import { RequestHandler } from 'express';
import NewsService from './service';
import ExtendedRequest from '../../@types/request';

class NewsController {

    addNews: RequestHandler = async (req: ExtendedRequest, res) => {
        try {
            if (req.files.length > 1) {
                const files: any = req.files;
                req.body.main_image = files[0].destination.replace('./public/', '') + '/' + files[0].filename;
                files.pop();
                if (files.length !== 0) {
                    req.body.inner_images = files.map((file: any) => {
                        return file.destination.replace('./public/', '') + '/' + file.filename;
                    });
                }
            }
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
            return res.status(200).send(dbResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

}

export default (new NewsController());