const express = require("express");

const { TodoController } = require("../../controllers")

const router = express.Router();

router.post("/", TodoController.createTodo);

router.get("/", TodoController.getAllTodo);

module.exports = router;