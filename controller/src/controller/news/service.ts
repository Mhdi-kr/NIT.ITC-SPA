import NewsType from '../../@types/news';
import QueryType from '../../@types/query';
import NewsInterface from '../../db/news/interface';
import News from '../../db/news/model';
import User from '../../db/user/model';

class NewsService {

    async addNews(caller: User, input: NewsType): Promise<News> {
        const dbResponse = await NewsInterface.addNews(caller, input);
        return dbResponse;
    }

    async getNews(input: NewsType & QueryType): Promise<News[]> {
        const dbResponse = await NewsInterface.getNews(input);
        return dbResponse;
    }

}

export default (new NewsService()); 