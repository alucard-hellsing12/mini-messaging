import { Router } from "express";
import {indexController} from "../controller/index.js";
const router = Router();

router.get("/",indexController);

export default router;