const { TodoService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST /api/v1/todos
 * request body: 
 * { "task": "task title", "description": "task details" }
 */
async function createTodo(req, res) {
    try {
        const todo = await TodoService.createTodo({
            task: req.body.task,
            description: req.body.description
        });
        SuccessResponse.data = todo;
        SuccessResponse.message = "Successfully created a todo";
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getTodos(req, res) {
    try {
        const todo = await TodoService.getTodos();
        return res
                .status(StatusCodes.OK)
                .json({
                    success: true,
                    message: "Successfully got all todos",
                    data: todo,
                    error: {}     
                });
    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: "Something went wrong while getting all todos",
                data: {},
                error: error    
            });
    }
}

async function getTodo(req, res) {
    try {
        const todo = await TodoService.getTodo(req.params.id);
        SuccessResponse.data = todo;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting a todo";
        ErrorResponse.error = error;
        res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function updateTodo(req, res) {
    try {
        const todo = await TodoService.updateTodo(req.params.id, {
            task: req.body.task,
            description: req.body.description
        });
        SuccessResponse.data = todo;
        SuccessResponse.message = "Successfully updated the todo"
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while updating a todo";
        ErrorResponse.error = error;
        res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function destroyTodo(req, res) {
    try {
        const todo = await TodoService.destroyTodo(req.params.id);
        SuccessResponse.data = todo;
        SuccessResponse.message = "Successfully deleted the todo"
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while deleting a todo";
        ErrorResponse.error = error;
        res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function updateCompletedAttribute(req, res) {
    try {
        const todo = await TodoService.toggleCompletedAttribute(req.params.id);
        SuccessResponse.data = todo;
        SuccessResponse.message = "Successfully updated the completed attribute of todo"
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while updating completed attribute";
        ErrorResponse.error = error;
        res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    destroyTodo,
    updateCompletedAttribute
}