import { Router as r } from 'express';
import * as stuffCtrl from '../controllers/stuff';

const router = r();

router.get('/', stuffCtrl.getThing);
router.post('/', stuffCtrl.createThing);

export default router;
