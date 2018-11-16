const express = require('express')
const router = new express.Router()
const jwtMiddleware = require('../middleware/jwt.middleware').jwtMiddleware
const PostController = require('../controllers/post')

// Create post
router.post('/', PostController.create)

// Find one post
router.get('/:id', PostController.findOne)


// export default router
module.exports = router
