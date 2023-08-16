const express = require('express');

const { InfoController } = require('../../controllers');
const { AuthMiddlewares } = require('../../middlewares');

const todoRoutes = require('./todo-routes');

const userRoutes = require('./user-routes');

const router = express.Router();

router.use('/todos', AuthMiddlewares.checkAuth, todoRoutes);

router.use('/user', userRoutes);

router.get('/info', InfoController.info);

module.exports = router;