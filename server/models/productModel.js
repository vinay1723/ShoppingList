import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "product must have a name"],
    },
    description: {
      type: String,
      required: [true, "product must have a description"],
    },
    rating: {
      type: Number,
      required: [true, "product must have rating"],
    },
    price: {
      type: Number,
      required: [true, "product must have a price"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
