import Express from 'express';
import morgan from 'morgan';
import cors from 'cors';
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
App.use(`/api/v${API_VERSION}`, ROUTES);
App.use(ErrorHandler);

export default App;