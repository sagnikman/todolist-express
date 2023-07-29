const { TodoService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createTodo(req, res) {
    try {
        const todo = await TodoService.createTodo({
            task: req.body.task,
            description: req.body.description
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: "Successfully created a todo",
                    data: todo,
                    error: {}     
                });
    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: "Something went wrong while creating a todo",
                data: {},
                error: error    
            });
    }
}

async function getAllTodo(req, res) {
    try {
        const todo = await TodoService.getAllTodo();
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

module.exports = {
    createTodo,
    getAllTodo
}