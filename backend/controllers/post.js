const Post = require('../models/post')
const User = require('../models/user')


exports.create = (req, res) => {
    const { authorID, value } = req.body

    let data = {
        author: authorID,
        value
    }
    Post.create(data, (err, post) => {
        if (err) {
            return res.status(400).send(err.toString());
        }
 
        return res.json(post)
    })
}

exports.findOne = async (req, res) => {
    const { id } = req.params

    let post = await Post.findById(id)
    let author = await User.findById(post.author)
    // todo
    // let likesCount = await Like.count({ postID: id })
    // let comments = await Comment.find({ postID: id })
    // let commentsCount = comments.length
    
    let postInfo = {
        post,
        author,
    }

    return res.json(postInfo)
}
