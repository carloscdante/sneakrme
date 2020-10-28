var mongoose = require("mongoose");

var priceSchema = mongoose.Schema({
    store: String,
    value: Number,
    eligibleForCoupon: Boolean
});

module.exports = mongoose.model("Price", priceSchema);