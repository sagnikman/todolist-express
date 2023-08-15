const express = require('express');
const { AuthMiddlewares } = require('../../middlewares');
const { UserController } = require('../../controllers');

const router = express.Router();

// api/v1/signup
router.post('/signup', AuthMiddlewares.validateAuthRequest, UserController.createUser);

router.post('/signin', AuthMiddlewares.validateAuthRequest, UserController.signin);

module.exports = router;