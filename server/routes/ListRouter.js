import express from "express";
import ListController from "../controllers/ListController.js";
import authController from "../controllers/authController.js";

const router = express.Router();

router.use(authController.protect);

router.route("/getlistproducts").get(ListController.getListProducts);
router.route("/addtolist").post(ListController.addToList);
router.route("/updateProduct").patch(ListController.updateProdList);
router.route("/deleteProduct/:id").delete(ListController.delProdFromList);

export default router;
