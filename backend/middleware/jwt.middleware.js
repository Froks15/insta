const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

exports.jwtMiddleware = (req, res, next) => {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ")
      const bearerToken = bearer[1]
      req.token = bearerToken
      jwt.verify(req.token, JWT_SECRET, (err, data) => {
        if (err) {
          return res.sendStatus(403)
        } else {
          req.user = data.user
          next()
        }
      })
    } else {
      return res.sendStatus(403)
    }
}