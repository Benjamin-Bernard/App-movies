const User = require("../models/user.model.js");
const bcrypt = require('bcryptjs');

// Enregistrement d'un utilisateur en base
exports.register = (req,res) => {
    User.findOne({mail: req.body.mail}, async function (err, user) {
        if (user == null) {
            req.body.password = bcrypt.hashSync(req.body.password,10);
            await User.create(req.body)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message
                    })
                });
        } else {
            res.status(500).send();
        }
    })
}
// Check si le user existe bien => si oui login OK
exports.logIn = (req,res) => {
    User.findOne({mail: req.body.mail},function(err,user){
        if(user == null){
            return res.sendStatus(401).json({message: "Authentification failed. Email does not exist"});
        }
        else if(!user.checkToken()){
            return res.sendStatus(402).json({message: "Authorization failed. No access"});
        }
        else if(!user.comparePassword(req.body.password)){
            return res.sendStatus(403).json({message: "Authentification failed. Wrong password"});
        }
        else{
            res.send(user);
        }
    })
}

exports.updateAccount = (req,res) => {

}

// Get tous les users de l'app
exports.getAllUsers = (req,res) => {
    User.find()
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}


exports.updatePassword = (req,res) => {

}