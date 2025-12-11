import Product from "../models/productModel.js";

const getProducts = async (req, res, next) => {
  const data = await Product.find();

  res.status(200).json({
    status: "success",
    products: data,
  });
};

export default { getProducts };
