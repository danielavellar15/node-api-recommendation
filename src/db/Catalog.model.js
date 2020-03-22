const mongoose = require("mongoose");

const catalogSchema = new mongoose.Schema({
    // any: mongoose.Schema.Types.Mixed
     _id: String,
     product: mongoose.Schema.Types.Mixed,
    // ancestors: [String],
    // attributeLabel: String,
    // title: String,
    // optionTitle: String,
    // price: mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean,
    // isVisible: Boolean,
    // updatedAt: Date,
    // createdAt: Date,
    // weight: Number,
    // metafields: [mongoose.Schema.Types.Mixed],
    // shopId: mongoose.Schema.Types.ObjectId,
    // isTaxable: Boolean,
    // type: String

},  function(docs){
    console.log(docs);
 });
const Catalog = mongoose.model("Catalog", catalogSchema, "Catalog");

module.exports = Catalog;