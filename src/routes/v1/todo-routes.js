const express = require("express");

const { TodoController } = require("../../controllers");
const { TodoMiddlewares } = require("../../middlewares");

const router = express.Router();

// api/v1/todos
router.post("/", 
            TodoMiddlewares.validateCreateRequest, 
            TodoController.createTodo);

// api/v1/todos
router.get("/", TodoController.getTodos);

// api/v1/todos/:id
router.get("/:id", TodoController.getTodo);

// api/v1/todos/:id
router.put("/:id", TodoController.updateTodo);

// api/v1/todos/:id
router.delete("/:id", TodoController.destroyTodo);

// api/v1/todos/:id
router.patch("/:id", TodoController.updateCompletedAttribute);

module.exports = router;