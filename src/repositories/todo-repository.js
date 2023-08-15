const CrudRepository = require('./crud-repository');
const { Todo } = require('../models');


class TodoRepository extends CrudRepository {
    constructor() {
        super(Todo);
    }

}

module.exports = TodoRepository;