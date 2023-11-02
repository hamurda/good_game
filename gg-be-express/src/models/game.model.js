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
        rating_top: {
            type: DataTypes.TINYINT
        },
        published: {
            type: DataTypes.BOOLEAN
        },
        background_image: {type: DataTypes.STRING},
    });

    return Game;
};