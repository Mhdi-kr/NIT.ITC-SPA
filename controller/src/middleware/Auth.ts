import { RequestHandler } from 'express';
import JWT from 'jsonwebtoken';
import ExtendedRequest from '../@types/request';
import UserInterface from '../db/user/interface';

export default new class {

    middleware: RequestHandler = async (req: ExtendedRequest, res, next) => {
        try {
            let tokenFromReq = req.headers.authorization?.replace('Bearer ', '');
            if (!tokenFromReq) {
                tokenFromReq = req.cookies.authorization?.replace('Bearer ', '');
                if (!tokenFromReq) {
                    throw 'You are not authorized';
                }
            }
            const insideToken = JWT.verify(tokenFromReq, process.env.JWT_SECRET!) as { id: string };
            const foundUser = await UserInterface.getUser({ id: parseInt(insideToken.id) });

            req.user = foundUser;

            return next();
        } catch (error) {
            console.log(error);
            return res.status(401).send(error);
        }
    }

}