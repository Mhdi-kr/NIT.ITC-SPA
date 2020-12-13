import Express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Cookies from 'cookie-parser';
import path from 'path';
import ROUTES from './routes/routes';
import ErrorHandler from './middleware/Error';

const App = Express();

const { API_VERSION } = process.env;

App.use(morgan('dev'));
App.use(cors({
    origin: /:3000/,
    credentials: true
}));
App.use(Express.json());
App.use(Cookies());
App.use(Express.static(path.join(__dirname, '../public')));
App.use(`/api/v${API_VERSION}`, ROUTES);
App.use(ErrorHandler);

export default App;