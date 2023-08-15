const { TodoRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");


const todoRepository = new TodoRepository();

async function createTodo(data) {
    try {
        const todo = await todoRepository.create(data);
        return todo;
    } catch (error) {
        if(error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new todo", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getTodos() {
    try {
        const todo = await todoRepository.getAll();
        return todo;
    } catch (error) {
        Logger.error("Something went wrong in Todo Service: getTodos");
        throw error;
    }
}

async function getTodo(id) {
    try {
        const todo = await todoRepository.get(id);
        return todo;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The todo you requested is not present", error.statusCode);
        }
        throw new AppError("Cannot fetch data of the todo", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateTodo(id, data) {
    try {
        const todo = await todoRepository.update(id, data);
        return todo;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The todo you requested is not present", error.statusCode);
        }
        throw new AppError("Cannot update todo", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyTodo(id) {
    try {
        const todo = await todoRepository.destroy(id);
        return todo;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The todo you requested to delete is not present", error.statusCode);
        }
        throw new AppError("Cannot delete todo", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function toggleCompletedAttribute(id) {
    try {
        const todoResponse = await todoRepository.get(id);
        const todo = await todoRepository.update(id, {
            completed: !todoResponse.completed
        });
        return todo;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The todo you requested to update is not present", error.statusCode);
        }
        throw new AppError("Something went wrong in Todo Service: toggleCompletedAttribute", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
 
module.exports = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    destroyTodo,
    toggleCompletedAttribute
}