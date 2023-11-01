const Genre = require("../models").genres;


exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const genre = {
        name: req.body.name,
        slug: req.body.slug,
        genres_count: req.body.genres_count,
        background_image: req.body.background_image,
        description: req.body.description,
    };

    await Genre.create(genre)
        .then(data=> res.send(data))
        .catch(err=> res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Genre."
        }));
};

exports.getAll = async (req, res) => {
    const genres = await Genre.findAll();
    res.send(genres);
};

exports.findAll = async (req, res) => {
    const genres = await Genre.findAll();
    res.send(genres);
};

exports.findById = async (req, res) => {
    await genre.findByPk(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

exports.update = async (req, res) => {
    await genre.update(req.body, {where: {id:req.params.id}})
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

exports.delete = async (req, res) => {
    await genre.destroy({where: {id:req.params.id}})
        .then(data => {
            if(data===1)
                res.status(200).send({message: "Genre deleted successfully"});
            else
                res.status(400).send({message: "Cannot delete the genre with the id:" + req.params.id});
        })
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}


