var mongoose = require("mongoose");

var sneakerSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   prices: [
      {
         store: String,
         price: String
      }
   ],
   trendingValue: Number,
   isTrending: Boolean
});

module.exports = mongoose.model("Sneaker", sneakerSchema);