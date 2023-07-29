const express = require('express');

const { InfoController } = require('../../controllers');

const todoRoutes = require("./todo-routes");

const router = express.Router();

router.use("/todos", todoRoutes);

router.get('/info', InfoController.info);

module.exports = router;