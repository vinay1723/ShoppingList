import mongoose from "mongoose";

const listProdSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      required: [true, "Booking must belong to a Tour!"],
    },
    title: {
      type: String,
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
    image: {
      type: String,
      required: [true, "product must have a image"],
    },
  },
  { timestamps: true }
);

const listProd = mongoose.model("listprod", listProdSchema);

export default listProd;
