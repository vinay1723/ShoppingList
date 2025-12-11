import express from "express";
const router = express.Router();
import productController from "../controllers/productController.js";

router.route("/getproducts").get(productController.getProducts);

export default router;
