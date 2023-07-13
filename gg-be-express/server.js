const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models");
db.sequelize.sync({alter:true}).then(() => {
    console.log('Tables created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Good Game." });
});

require('./src/routes/game.routes')(app);
require('./src/routes/user.routes')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

