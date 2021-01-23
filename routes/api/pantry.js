const router = require("express").Router();
const pantryController = require("../../controllers/pantryController");

//this route matches /api/pantry

router.route("/")
    .get(pantryController.findAll)
    .post(pantryController.create);


    module.exports = router;