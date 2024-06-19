import XpenseDataModel from "../models/xpense-model";
import { Request, Response } from "express";


export const getXpenseData = async (req: Request, res: Response) => {
  try {
    const userId = await req.params.userId;
    const xpenseData = await XpenseDataModel.find({ userId: userId });
    if (!xpenseData) return res.status(404).send("Data not found");
    res.status(200).send(xpenseData);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createXpenseData = async (req: Request, res: Response) => {
  try {
    const xpenseData = await XpenseDataModel.create(req.body);
    res.status(200).send(xpenseData);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateXpenseData = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const xpenseData = await XpenseDataModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!xpenseData) return res.status(404).send("Data not found");
    res.status(200).send(xpenseData);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteXpenseData = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const xpenseData = await XpenseDataModel.findByIdAndDelete(id);
    if (!xpenseData) return res.status(404).send("Data not found");
    res.status(200).send(xpenseData);
  } catch (error) {
    res.status(500).send(error);
  }
};
