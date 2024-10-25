import Router from 'express';
import { chapterCreate } from '../controllers/chapterControllers.js';


const router = Router();

router.post("/create",chapterCreate);

export default router;