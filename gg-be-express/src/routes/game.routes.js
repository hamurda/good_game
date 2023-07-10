module.exports = app =>{
    const games = require("../controllers/game.controller.js");
    const router = require("express").Router();

    router.get("/", games.findAll);
    router.post("/", games.create);
    router.get("/:id", games.findById);
    router.put("/:id", games.update);
    router.delete("/:id", games.delete);
    router.get("/byGenre", games.findAllByGenre);

    app.use('/api/games', router);
}