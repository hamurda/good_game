const User = require("../models").users;
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

exports.verifyTheUser = async (req, res) => {
    let user = await User.findOne({where: {username: req.body.username}});
    if (!user) return res.status(400).send("Invalid username or password.");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid username or password.");

    const token = jwt.sign({
                    _id:user.id,
                    username: user.username
                }, config.get('jwtPrivateKey'));

    res.send(token);
};