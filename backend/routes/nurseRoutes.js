import express from "express"

import {getNurse,createNurse,updateNurse} from "../controller/nurse.controller.js";

const router=express.Router();

router.get("/", getNurse)

router.post("/",createNurse)


router.put("/:_id", updateNurse);

export default router;