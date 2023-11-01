const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const Genre = sequelize.define("genre", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING
        },
        games_count: {
            type: DataTypes.INTEGER
        },
        background_image: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
    });

    return Genre;
};