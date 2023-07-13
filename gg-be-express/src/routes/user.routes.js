module.exports = app =>{
    const users = require("../controllers/user.controller");
    const router = require("express").Router();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "*" );
        next();
    });

    router.get("/", users.findAll);
    router.post("/", users.create);
    router.get("/:id", users.findById);
    router.put("/:id", users.update);
    router.delete("/:id", users.delete);
    router.get("/byUsername", users.findAllByUsername);

    app.use('/api/users', router);
}