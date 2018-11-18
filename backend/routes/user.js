const express = require('express')
const router = new express.Router()
const jwtMiddleware = require('../middleware/jwt.middleware').jwtMiddleware
const UserController = require('../controllers/user')

// Find user
router.get('/:id', UserController.getUser)

router.get('/:id/profile', UserController.getUserProfile)



// export default router
module.exports = router
