"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodController_1 = require("../controllers/foodController");
const multer_1 = __importDefault(require("multer"));
const foodRouter = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        cb(null, "uploads/");
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({ storage });
foodRouter.post("/add", upload.single("image"), foodController_1.addFood);
foodRouter.get("/list", foodController_1.getFoods);
foodRouter.get("/:id", foodController_1.getFoodById);
foodRouter.post("/:id", foodController_1.removeFood);
exports.default = foodRouter;
