const express = require("express");
const config = require('config');
const app = express();


if (!config.get("jwtKey")) {
    console.log("no key")
    process.exit(1);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models");
db.sequelize.sync({ alter: true}).then(() => {
    console.log('Tables created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Good Game." });
});

require('./src/routes/game.router')(app);
require('./src/routes/genre.router')(app);
require('./src/routes/user.router')(app);
require('./src/routes/auth.router')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

