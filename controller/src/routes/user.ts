import { Router } from 'express';
import UserController from '../controller/user/controller';
import Auth from '../middleware/Auth';

const USER_ROUTER = Router();

USER_ROUTER.post('/register', UserController.register);

USER_ROUTER.post('/login', UserController.login);

USER_ROUTER.patch('/edit', Auth.middleware, UserController.edit);

USER_ROUTER.delete('/remove', Auth.middleware, UserController.remove);

export default USER_ROUTER;