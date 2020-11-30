import { Router } from 'express';
import UserController from '../controller/user/controller';

const USER_ROUTER = Router();

USER_ROUTER.post('/register', UserController.register);

USER_ROUTER.post('/login', UserController.login);

export default USER_ROUTER;