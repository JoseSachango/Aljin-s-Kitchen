//we should bring in a reference to our pantry model
// whithin this obj we will write any functions we plan to use to affect the crud actions to our pantry model
//this is going to include a get and post request


module.exports = {

    findAll: function(req, res) {
        db.Pantry
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Pantry
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};