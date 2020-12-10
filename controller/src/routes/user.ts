import { Router } from 'express';
import UserController from '../controller/user/controller';

const USER_ROUTER = Router();

USER_ROUTER.post('/register', UserController.register);

USER_ROUTER.post('/login', UserController.login);

USER_ROUTER.patch('/edit', UserController.edit);

USER_ROUTER.delete('/remove', UserController.remove);

export default USER_ROUTER;