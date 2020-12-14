import User from './user/model';
import Data from './data/model';
import News from './news/model';
// End of imports for models


News.belongsTo(User, { as: 'user' });