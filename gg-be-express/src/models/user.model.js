const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            required:true,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return User;
};