const express = require('express')
const router = new express.Router()
const jwtMiddleware = require('../middleware/jwt.middleware').jwtMiddleware
const SubscribeController = require('../controllers/subscribe')

// Subscribe user
router.post('/:id', [jwtMiddleware], SubscribeController.subscribe)

// Unsubscribe user
router.delete('/:id', [jwtMiddleware], SubscribeController.unsubscribe)

// Find user subscribed to
router.get('/:id', SubscribeController.subscribeTo)


// export default router
module.exports = router
