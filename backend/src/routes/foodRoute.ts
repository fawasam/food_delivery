import express from "express";
import {
  addFood,
  getFoodById,
  getFoods,
  removeFood,
} from "../controllers/foodController";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", getFoods);
foodRouter.get("/:id", getFoodById);
foodRouter.post("/:id", removeFood);

export default foodRouter;
