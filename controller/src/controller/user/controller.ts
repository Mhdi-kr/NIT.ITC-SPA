import { RequestHandler } from 'express';
import ExtendedRequest from '../../@types/request';
import UserService from './service';
import Validator from '../../utils/Validator';
import Error from '../../utils/Error';
import checker from 'validator';

class UserController {

    register: RequestHandler = async (req: ExtendedRequest, res, next) => {
        try {
            const dbResponse = await UserService.register(req.body);
            await dbResponse.generateToken();
            res.status(201).send({ user: dbResponse });
        } catch (error) {
            return next(error);
        }
    }

    login: RequestHandler = async (req, res, next) => {
        try {
            if (!Validator.validateLoginInput(req.body)) {
                throw new Error({
                    code: 400,
                    message: 'Payload isn\'t correct for login request'
                });
            }
            if (req.body.input) {
                if (checker.isEmail(req.body.input)) {
                    req.body.email = req.body.input;
                } else {
                    req.body.username = req.body.input;
                }
                delete req.body.input;
            }
            const dbResponse = await UserService.login(req.body);
            await dbResponse.generateToken();
            return res.status(200).send({ user: dbResponse });
        } catch (error) {
            return next(error);
        }
    }
}

export default (new UserController());