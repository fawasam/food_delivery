import { Request, Response } from "express";
import foodModel from "../models/foodModel";
import fs from "fs";

/**
 *  @desc Get all foods
 *  @route GET /v1/api/food/list
 *  @access Public
 *  @returns {Array} foods
 */

export const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, total: foods.length, data: foods });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};

/**
 *  @desc Get single food by id
 *  @route GET /v1/api/food/:id
 *  @access Public
 *  @returns {Array} foods
 */

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const food = await foodModel.findById(req.params.id);
    if (food) {
      res.send(food);
    } else {
      res.status(404).send({ message: "Food not found" });
    }
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};

/**
 *  @desc Add a food
 *  @route POST /v1/api/food/add
 *  @access Private
 *  @returns {Object} message
 */

export const addFood = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      price,
      category,
      brand,
      rating,
      numReviews,
      countInStock,
    } = req.body;
    let image_filename = req.file?.filename;
    const food = new foodModel({
      name,
      description,
      price,
      image: image_filename,
      category,
      brand,
      rating,
      numReviews,
      countInStock,
    });
    const newFood = await food.save();
    res.json({ message: "Food added", success: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

/**
 *  @desc Remove a food
 *  @route POST /v1/api/food/:id
 *  @access Private
 *  @returns {Object} message
 */

export const removeFood = async (req: Request, res: Response) => {
  try {
    const food = await foodModel.findById(req.params.id);
    if (food) {
      fs.unlink(`uploads/${food.image}`, () => {});
      await foodModel.findByIdAndDelete(req.params.id);
      res.json({ message: "Food removed", success: true });
    } else {
      res.status(404).send({ message: "Food not found" });
    }
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
