const Game = require("../models").games;
const Platform = require("../models").platforms;


exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const game = {
        name: req.body.name,
        description: req.body.description,
        genre: req.body.genre,
        platform: req.body.platform,
        published: req.body.published ? req.body.published : false,
        background_image: req.body.background_image,
    };

    await Game.create(game)
        .then(data=> res.send(data))
        .catch(err=> res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Game."
    }));
};

exports.getAll = async (req, res) => {
    const games = await Game.findAll();
    res.send(games);
};

exports.findAll = async (req, res) => {
    const games = await Game.findAll(
        {include:[{
                model:Platform,
                as: "platforms",
                attributes: ["id", "name", "slug"],
                through: {
                    attributes:[],
                }
            }]}
    );
    res.send(games);
};

exports.findAllByGenre = async (req, res) => {
     await Game.findAll({where: {genre: req.body.genre}})
        .then(data => res.send(data))
         .catch(err => res.status(500)
             .send(err.message || "Something went wrong."));
}

exports.findById = async (req, res) => {
    await Game.findByPk(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

exports.update = async (req, res) => {
    await Game.update(req.body, {where: {id:req.params.id}})
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

exports.delete = async (req, res) => {
    await Game.destroy({where: {id:req.params.id}})
        .then(data => {
            if(data===1)
                res.status(200).send({message: "Game deleted successfully"});
            else
                res.status(400).send({message: "Cannot delete the game with the id:" + req.params.id});
        })
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}


