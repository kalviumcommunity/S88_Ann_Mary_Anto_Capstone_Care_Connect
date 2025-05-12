import express from "express"

import {getNurse} from "../controller/nurse.controller.js";

const router=express.Router();

router.get("/", getNurse)

export default router;