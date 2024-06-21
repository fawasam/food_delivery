"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const foodSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    //
    brand: { type: String },
    rating: { type: Number },
    numReviews: { type: Number },
    countInStock: { type: Number, required: true },
});
const foodModel = mongoose_1.default.models.food || mongoose_1.default.model("Food", foodSchema);
exports.default = foodModel;
