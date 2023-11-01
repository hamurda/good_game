const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const Platform = sequelize.define("platform", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING
        },
    });

    return Platform;
};