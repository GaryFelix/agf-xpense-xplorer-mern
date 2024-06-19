import express, { Request, Response } from "express";
const router = express.Router();

import {
  getXpenseData,
  createXpenseData,
  updateXpenseData,
  deleteXpenseData,
} from "../controller/xpense-controller";

router.get("/getAllByUserID/:userId", getXpenseData);
router.post("/", createXpenseData);
router.put("/:id", updateXpenseData);
router.delete("/:id", deleteXpenseData);

export default router;

