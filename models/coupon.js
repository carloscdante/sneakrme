var mongoose = require("mongoose");

var couponSchema = mongoose.Schema({
    price: String,
    coupon: String
});

module.exports = mongoose.model("Coupon", userSchema);