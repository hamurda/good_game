const games = require("../controllers/game.controller.js");
module.exports = app =>{
    const games = require("../controllers/game.controller.js");
    const router = require("express").Router();


    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "*" );
        next();
    });

    router.get("/", games.findAll);
    router.post("/", games.create);
    router.get("/:id", games.findById);
    router.put("/:id", games.update);
    router.delete("/:id", games.delete);
    router.get("/byGenre", games.findAllByGenre);

    app.use('/api/games', router);
}