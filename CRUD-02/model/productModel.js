import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a product name"],
  },
  quantity: {
    type: Number,
    required: [true, "Please provide product quantity"],
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "Please provide product price"],
    default: 0,
  },
  image: {
    type: String,
    required: false,
  },
}, {timestamps: true});



const Product = mongoose.model("product", productSchema)
export default Product;