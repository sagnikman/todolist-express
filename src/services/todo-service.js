const { TodoReposity } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");


const todoRepository = new TodoReposity();

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
        Logger.error("Something went wrong in Todo Service: getTodo");
        throw error;
    }
}

async function updateTodo(id, data) {
    try {
        const todo = await todoRepository.update(id, data);
        return todo;
    } catch (error) {
        Logger.error("Something went wrong in Todo Service: updateTodo");
        throw error;
    }
}

async function destroyTodo(id) {
    try {
        const todo = await todoRepository.destroy(id);
        return todo;
    } catch (error) {
        Logger.error("Something went wrong in Todo Service: destroyTodo");
        throw error;
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
        Logger.error("Something went wrong in Todo Service: toggleCompletedAttribute");
        throw error;
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