import { RequestHandler } from 'express';
import ExtendedRequest from '../../@types/request';
import UserService from './service';
import Validator from '../../utils/Validator';
import Error from '../../utils/Error';
import checker from 'validator';
import User from '../../db/user/model';

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
    
    edit: RequestHandler = async (req, res) => {
        try {
            const editFields = req.body.fields,
                { uid } = req.query;
            if (!uid) {
                throw 'Provide an id for selecting user';
            }
            const dbResponse: User = await UserService.edit(parseInt(uid as string), editFields); 
            return res.status(200).send(dbResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    remove: RequestHandler = async (req, res) => {
        try {
            const { uid } = req.query;
            if (!uid) {
                throw 'Provide an id for selecting user';
            }
            const dbResponse: User = await UserService.remove(parseInt(uid as string));
            return res.status(200).send(dbResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
}

export default (new UserController());