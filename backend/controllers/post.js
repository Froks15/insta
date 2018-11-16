const Post = require('../models/post')

exports.create = (req, res) => {
    const { authorID, value } = req.body

    let data = {
        authorID,
        value
    }
    Post.create(data, (err, post) => {
        if (err) {
            return res.status(400).send(err.toString());
        }
 
        return res.json(post)
    })
}

exports.findOne = (req, res) => {
    const { id } = req.params

    Post.findById(id, (err, post) => {
        if (err) {
            return res.status(400).send(err.toString());
        }

        return res.json(post)
    })
}
