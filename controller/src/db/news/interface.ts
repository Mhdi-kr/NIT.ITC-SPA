import NewsType from '../../@types/news';
import QueryType, { Order } from '../../@types/query';
import User from '../user/model';
import News from './model';

class NewsInterface {

    async addNews(caller: User, input: NewsType): Promise<News> {
        const createdNews = await News.create(input);
        await createdNews.setUser(caller.id);
        return createdNews;
    }
    
    async getNews(input: NewsType & QueryType = {}): Promise<News[]> {
        const limit = input.limit, offset = input.offset, sort_by = input.sort_by, sort_order = input.sort_order;
        delete input.limit;
        delete input.offset;
        delete input.sort_by;
        delete input.sort_order;
        const found = await News.findAll({
            where: {
                ...input
            },
            order: [
                [sort_by ? sort_by : 'createdAt', sort_order ? sort_order : Order.DESC]
            ],
            limit: (limit ? parseInt(limit as string) : 5),
            offset: (offset ? parseInt(offset as string) : 0),
            include: ['user']
        });
        return found;
    }
}

export default (new NewsInterface());