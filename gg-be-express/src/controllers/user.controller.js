const User = require("../models").users;


exports.create = async (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const user = {
        username: req.body.username,
        password: req.body.password,
    };

    await User.create(user)
        .then(data=> res.send(data))
        .catch(err=> res.status(500).send({
            message:
                err.message || "Some error occurred while creating the User."
        }));
};

exports.getAll = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
};

exports.findAll = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
};

exports.findAllByUsername = async (req, res) => {
    await User.findAll({where: {username: req.body.username}})
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

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


