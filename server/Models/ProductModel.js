import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      max: 500,
    },
    category: {
      type: String,
      required: true,
    },
    // Add other fields as needed
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
