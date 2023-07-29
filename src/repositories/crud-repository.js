const { Logger } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository: create");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data.id);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository: get");
            throw error
        }
    }

    async getAll(data) {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository: getAll");
            throw error
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud Repository: update');
            throw error;
        }
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud Repository: destroy');
            throw error;
        }
    }
}

module.exports = CrudRepository;