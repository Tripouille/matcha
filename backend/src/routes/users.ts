import { Router as r } from 'express';
import * as usersCtrl from '../controllers/users';

const router = r();

router.get('/', usersCtrl.getUsers);
router.get('/:id', usersCtrl.getUserById);
router.post('/', usersCtrl.createUser);

export default router;
