import { ErrorRequestHandler } from 'express';
import Error from '../utils/Error';

const ErrorHandler: ErrorRequestHandler = async (err: Error | any, req, res, next) => {
    console.log(err);
    return res.status(err.code || 500).send(err.message ? err.message : err.toString());
}

export default ErrorHandler;