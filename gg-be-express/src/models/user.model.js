const {DataTypes} = require("sequelize");
const jwt = require("jsonwebtoken");
const config = require("config");


module.exports = (sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    User.prototype.generateJWT = function() {
        return jwt.sign({
            _id:this.id,
            username: this.username
        }, config.get('jwtKey'));
    }

    return User;
};