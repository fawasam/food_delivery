"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFood = exports.addFood = exports.getFoodById = exports.getFoods = void 0;
const foodModel_1 = __importDefault(require("../models/foodModel"));
const fs_1 = __importDefault(require("fs"));
/**
 *  @desc Get all foods
 *  @route GET /v1/api/food/list
 *  @access Public
 *  @returns {Array} foods
 */
const getFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foods = yield foodModel_1.default.find({});
        res.json({ success: true, total: foods.length, data: foods });
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.getFoods = getFoods;
/**
 *  @desc Get single food by id
 *  @route GET /v1/api/food/:id
 *  @access Public
 *  @returns {Array} foods
 */
const getFoodById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const food = yield foodModel_1.default.findById(req.params.id);
        if (food) {
            res.send(food);
        }
        else {
            res.status(404).send({ message: "Food not found" });
        }
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.getFoodById = getFoodById;
/**
 *  @desc Add a food
 *  @route POST /v1/api/food/add
 *  @access Private
 *  @returns {Object} message
 */
const addFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, description, price, category, brand, rating, numReviews, countInStock, } = req.body;
        let image_filename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        const food = new foodModel_1.default({
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
        const newFood = yield food.save();
        res.json({ message: "Food added", success: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.addFood = addFood;
/**
 *  @desc Remove a food
 *  @route POST /v1/api/food/:id
 *  @access Private
 *  @returns {Object} message
 */
const removeFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const food = yield foodModel_1.default.findById(req.params.id);
        if (food) {
            fs_1.default.unlink(`uploads/${food.image}`, () => { });
            yield foodModel_1.default.findByIdAndDelete(req.params.id);
            res.json({ message: "Food removed", success: true });
        }
        else {
            res.status(404).send({ message: "Food not found" });
        }
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.removeFood = removeFood;
