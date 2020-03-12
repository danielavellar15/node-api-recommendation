const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    description: {
        type: String
    },
    price: {
        type: String
    }
});
const Product = mongoose.model("product", productSchema);

module.exports = Product;