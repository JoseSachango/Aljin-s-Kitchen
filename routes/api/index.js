const router = require("express").Router();
const bookRoutes = require("./recipes");

// Recipes routes
router.use("/recipes", recipesRoutes);

module.exports = router;
