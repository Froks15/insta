const Subscribe = require('../models/subscribe')

exports.subscribe = (req, res) => {
    const { id } = req.params
    const subscriberID = req.user._id

    if (id === subscriberID) {
        return res.status(400).send('You can not subscribe to yourself')
    }
    
    Subscribe.find({ subscriberID, userID: id }, (err, subscribe) => {
        if (subscribe.length > 0) {
            return res.status(400).send('You are already subscribed to this user')
        } else {
            let data = {
                subscriberID,
                userID: id,
            }
            Subscribe.create(data, (err, subscribe) => {
                if (err) {
                    return res.status(400).send(err.toString());
                }
         
                return res.json(subscribe)
            })
        }
    })
}

exports.unsubscribe = (req, res) => {
    const { id } = req.params
    const subscriberID = req.user._id


    let data = {
        subscriberID,
        userID: id,
    }
    Subscribe.findOneAndRemove(data, (err, subscribe) => {
        if (err) {
            return res.status(400).send(err.toString());
        }

        if (subscribe === null){
            return res.status(400).send('You can not unsubscribe because not subscribed')
        }
 
        return res.json(subscribe)
    })
}

exports.subscribeTo = (req, res) => {
    const { id } = req.params

    Subscribe.find({ subscriberID: id }, (err, subscribeTo) => {
        if (err) {
            return res.status(400).send(err.toString());
        }

        return res.json(subscribeTo)
    })
}
