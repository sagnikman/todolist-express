const express = require('express');

const { UserController } = require('../../controllers');

const router = express.Router();

// api/v1/signup
router.post('/signup', UserController.createUser);

router.post('/signin', UserController.signin);

module.exports = router;