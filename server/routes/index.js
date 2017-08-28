import express from 'express';
import account from './account';
import memo from './memo';
<<<<<<< HEAD
import file from './file';
=======
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57

const router = express.Router();
router.use('/account', account);
router.use('/memo', memo);
<<<<<<< HEAD
router.use('/file',file);
=======
>>>>>>> a06aeab85aebcf4f943d6a6538015100e70e4d57

export default router;
