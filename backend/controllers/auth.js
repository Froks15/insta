const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/user')
const JWT_SECRET = process.env.JWT_SECRET

/**
 * @api {post} /signIn Sign in
 * @apiName sign in user
 * @apiGroup User
 *
 * @apiParam {String} email User email.
 * @apiParam {String} password User password.
 * 
 *
 * @apiSuccess {String} token jwt token.
 * @apiSuccess {Object} user SignIn user object.
 * @apiSuccess {Object} user._id  SignIn user id.
 * @apiSuccess {Object} user._email  SignIn user email.
 * 
 * 
 * 
 */

exports.signIn = (req, res) => {
    const { email, password } = req.body
    let data = {
        email,
    }

    User.findOne(data, (err, user) => {
        if (err) {
            return res.status(400).send(err.toString());
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(400).send('bcrypt compare error')
            }
            if (result) {
                const token = jwt.sign({ user }, JWT_SECRET)
                
                return res.json({
                    token: token,
                    user: user,
                })
            } else {
                return res.status(400).send('wrong password')
            }
        })
    })
}


/**
 * @api {post} /register Registration
 * @apiName register user
 * @apiGroup User
 *
 * @apiParam {String} email User email.
 * @apiParam {String} password User password.
 *
 * @apiSuccess {Object} user Register user object.
 * @apiSuccess {Object} user._id Register user id.
 * @apiSuccess {Object} user._email Register user email.
 * @apiSuccess {Object} user._password Register user password.
 * 
 */

exports.register = (req, res) => {
    const { name, email, password } = req.body
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return res.status(400).send('genSalt error')
        }
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(400).send('brcypt hash error')
            }
            let data = {
                name,
                email,
                password: hash,
            }
            User.create(data, (err, user) => {
                if (err) {
                   return res.status(400).send(err.toString());
                }
        
                return res.json(user)
            })
        })
    })
}