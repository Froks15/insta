const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

exports.adminMiddleware = (req, res, next) => {
  jwt.verify(req.token, JWT_SECRET, (err, data) => {
    if (data.user.role === 'admin') {
      next()
    } else {
      return res.sendStatus(403)
    }
  })
}