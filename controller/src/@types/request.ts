import { RequestHandler } from 'express';
import User from '../db/user/model';
import Error from '../utils/Error';

export default interface ExtendedRequest extends Express.Request {
    [key: string]: any;
    user?: User;
    error?: Error;
}