const users = require("../controllers/user.controller");
module.exports = app => {
    const users = require("../controllers/user.controller");
    const router = require("express").Router();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "*" );
        next();
    });

    router.get("/", users.getAll);
    router.post("/", users.create);
    router.get("/:id", users.findById);
    router.get("/:username", users.findOne);
    router.put("/:id", users.update);
    router.delete("/:id", users.delete);

    app.use('/api/users', router);
}