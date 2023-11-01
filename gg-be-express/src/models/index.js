const dbConfig = require("../../config/db.config.js");
const Sequelize = require("sequelize")


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Tables
db.games = require("./game.model")(sequelize);
db.users = require("./user.model")(sequelize);
db.platforms = require("./platform.model")(sequelize);
db.genres = require("./genre.model")(sequelize);

//Associations
db.games.belongsToMany(db.platforms, {through: 'Platform_Game' });
db.platforms.belongsToMany(db.games, {through: 'Platform_Game' });

db.games.belongsToMany(db.genres, {through: 'Genre_Game' });
db.genres.belongsToMany(db.games, {through: 'Genre_Game' });


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = db;
