const { TodoReposity } = require("../repositories");

const todoRepository = new TodoReposity();

async function createTodo(data) {
    try {
        const todo = await todoRepository.create(data);
        return todo;
    } catch (error) {
        Logger.error("Something went wrong in Todo Service: createTodo");
        throw error;
    }
}

async function getAllTodo() {
    try {
        const todo = await todoRepository.getAll();
        return todo;
    } catch (error) {
        Logger.error("Something went wrong in Todo Service: getAllTodo");
        throw error;
    }
}
 
module.exports = {
    createTodo,
    getAllTodo
}