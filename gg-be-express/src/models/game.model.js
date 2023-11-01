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
        published: {
            type: DataTypes.BOOLEAN
        },
        background_image: {type: DataTypes.STRING},
    });

    return Game;
};