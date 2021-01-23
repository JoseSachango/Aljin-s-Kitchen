const router = require("express").Router();
const recipesRoutes = require("./recipes");
const pantryRoutes = require ("./pantry");

// Recipes routes
//this route matches /api/recipes 
//these routes are responsible for communicating with our third party api

router.use("/recipes", recipesRoutes);

//this route matches /api/pantry 
//this route will only touch our db

router.use("/pantry", pantryRoutes);



module.exports = router;
