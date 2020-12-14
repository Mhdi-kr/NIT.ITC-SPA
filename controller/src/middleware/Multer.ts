import multer from 'multer';
import fs from 'fs';
import path from 'path';
import ExtendedRequest from '../@types/request';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        switch (file.fieldname) {
            case 'cv': {
                return cb(null, './public/cvs');
            };
            case 'news': {
                return cb(null, './public/news');
            }
        }
    },
    filename: (req: ExtendedRequest, file, cb) => {
        const extention = file.mimetype.split('/').pop();
        if (!fs.existsSync(path.join(__dirname, `../../public/`))) {
            fs.mkdirSync(path.join(__dirname, `../../public/`));
            fs.mkdirSync(path.join(__dirname, `../../public/${file.fieldname === 'cv' ? 'cv' : 'news'}/`));
        } else if (!fs.existsSync(path.join(__dirname, `../../public/${file.fieldname === 'cv' ? 'cv' : 'news'}/`))) {
            fs.mkdirSync(path.join(__dirname, `../../public/${file.fieldname === 'cv' ? 'cv' : 'news'}/`));
        }
        cb(null, new Date().getTime() + `_${file.fieldname === 'cv' ? 'CV' : 'NEWS'}.` + extention);
    }
});

const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'||
        file.mimetype === 'application/pdf'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

export default multer({ storage, fileFilter });