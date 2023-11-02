module.exports = app =>{
    const platforms = require("../controllers/platform.controller");
    const router = require("express").Router();


    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "*" );
        next();
    });

    router.get("/", platforms.findAll);
    router.post("/", platforms.create);
    router.get("/:id", platforms.findById);
    router.put("/:id", platforms.update);
    router.delete("/:id", platforms.delete);

    app.use('/api/platforms', router);
}