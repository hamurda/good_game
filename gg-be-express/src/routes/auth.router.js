module.exports = app => {
    const auth = require("../controllers/auth.controller");
    const router = require("express").Router();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "*" );
        next();
    });

    router.post("/", auth.verifyTheUser);

    app.use('/api/auth', router);
}