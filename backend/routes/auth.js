const express = require('express')
const router = new express.Router()
const AuthController = require('../controllers/auth')

// SignIn user
router.post('/signIn', AuthController.signIn)

// Register user
router.post('/register', AuthController.register)

// export default router
module.exports = router
