const User = require('../models').User;

module.exports = {
    createUser(req,res){
        return User
            .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
    retrieveUser(req,res){
        return User
            .findById(req.params.id)
            .then(users => {
                if(!users){
                return res.status(404).send({
                    message: 'user not found'
                })
             }
                return res.status(200).send(users)
            })
            .catch(error => res.status(400).send(error));
    }
};