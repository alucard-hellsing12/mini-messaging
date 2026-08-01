import { Router } from "express";
import {getNew,postNew} from "../controller/new.js";

const router = Router();

router.get("/", getNew);
router.post("/",postNew);

export default router