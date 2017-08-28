import express from 'express';
import account from './account';
import memo from './memo';
import file from './file';

const router = express.Router();
router.use('/account', account);
router.use('/memo', memo);
router.use('/file',file);

export default router;
