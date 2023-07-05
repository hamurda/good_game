const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const Game = sequelize.define("game", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        platform: {
            type: DataTypes.STRING
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    });

    return Game;
};