import express from "express"

import {getNurse,createNurse} from "../controller/nurse.controller.js";

const router=express.Router();

router.get("/", getNurse)

router.post("/",createNurse)

export default router;