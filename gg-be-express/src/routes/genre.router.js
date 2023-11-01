const genres = require("../controllers/game.controller.js");
module.exports = app =>{
    const genres = require("../controllers/genre.controller.js");
    const router = require("express").Router();


    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "*" );
        next();
    });

    router.get("/", genres.findAll);
    router.post("/", genres.create);
    router.get("/:id", genres.findById);
    router.put("/:id", genres.update);
    router.delete("/:id", genres.delete);

    app.use('/api/genres', router);
}