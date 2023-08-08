const User = require("../models").users;
const bcrypt = require('bcrypt');
const _ = require('lodash');

exports.create = async (req, res) => {
    let user = await User.findOne({where: {username: req.body.username}});
    if (user) return res.status(400).send("User already registered");

    user = _.pick(req.body, ['username', 'password']);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await User.create(user)
        .then(data=> res.send(_.pick(data, ['username'])))
        .catch(err=> res.status(500).send({
            message:
                err.message || "Some error occurred while creating the User."
        }));
};

exports.findOne = async (req, res) => {
    await User.findOne({where: {username: req.body.username}})
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Some error occurred while finding the User."));
}

exports.getAll = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
};

exports.findById = async (req, res) => {
    await User.findByPk(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

exports.update = async (req, res) => {
    await User.update(req.body, {where: {id:req.params.id}})
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

exports.delete = async (req, res) => {
    await User.destroy({where: {id:req.params.id}})
        .then(data => {
            if(data===1)
                res.status(200).send({message: "User deleted successfully"});
            else
                res.status(400).send({message: "Cannot delete the user with the id:" + req.params.id});
        })
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}


