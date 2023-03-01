const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
    nameproduct: String,
    image: String,
    description: String,
    gender: String,
    category: String,
    taille: String,
    price: Number,

});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;