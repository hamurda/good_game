const User = require("../models").users;
const bcrypt = require('bcrypt');

exports.verifyTheUser = async (req, res) => {
    //TODO: bu aslinda login, verify user token gercekten sana mi ait diye bakacak
    let user = await User.findOne({where: {username: req.body.username}});
    if (!user) return res.status(400).send("Invalid username or password.");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid username or password.");

    const token = user.generateJWT();

    res.send(token);
};