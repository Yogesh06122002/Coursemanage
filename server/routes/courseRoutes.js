import { Router } from "express";
import { createCourse } from "../controllers/courseControllers.js";

const router = Router();

router.post('/create',createCourse);

export default router;