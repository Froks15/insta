const User = require('../models/user')
const Post = require('../models/post')
const Subscribe = require('../models/subscribe')



exports.getUser = (req, res) => {
    const { id } = req.params

    User.findById(id, (err, user) => {
        if (err) {
            return res.status(400).send(err.toString());
        }

        return res.json(user)
    })
}


exports.getUserProfile = async (req, res) => {
    const { id } = req.params

    let user = await User.findById(id)
    let posts = await Post.find({ author: id })
    let postsCount = posts.length
    let subscribersCount = await Subscribe.count({ userID: id })
    let subscriptionsCount = await Subscribe.count({ subscriberID: id })

    let profile = {
        user,
        posts,
        postsCount,
        subscribersCount,
        subscriptionsCount,
    }

    return res.json(profile)
}
