const dbConfig = require("../config/db.config.js");
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

db.games = require("./game.model.js")(sequelize);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = db;
