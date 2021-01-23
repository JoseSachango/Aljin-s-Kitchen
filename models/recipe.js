const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  image: {type: String}

});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
