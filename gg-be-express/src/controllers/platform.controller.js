const Platform = require("../models").platforms;


exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const platform = {
        name: req.body.name,
        slug: req.body.slug,
    };

    await Platform.create(platform)
        .then(data=> res.send(data))
        .catch(err=> res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Platform."
        }));
};

exports.getAll = async (req, res) => {
    const platforms = await Platform.findAll();
    res.send(platforms);
};

exports.findAll = async (req, res) => {
    const platforms = await Platform.findAll();
    res.send(platforms);
};

exports.findById = async (req, res) => {
    await Platform.findByPk(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

exports.update = async (req, res) => {
    await Platform.update(req.body, {where: {id:req.params.id}})
        .then(data => res.send(data))
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}

exports.delete = async (req, res) => {
    await Platform.destroy({where: {id:req.params.id}})
        .then(data => {
            if(data===1)
                res.status(200).send({message: "Platform deleted successfully"});
            else
                res.status(400).send({message: "Cannot delete the Platform with the id:" + req.params.id});
        })
        .catch(err => res.status(500)
            .send(err.message || "Something went wrong."));
}


