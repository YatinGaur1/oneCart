import express from "express";
import { addProduct, getAllProduct, removeProduct } from "../controller/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js"

let productRoutes = express.Router();

productRoutes.post(
  "/addProduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

productRoutes.get("/getProduct",getAllProduct)
productRoutes.post("/remove/:id",adminAuth,removeProduct)
export default productRoutes
