const { Logger } = require('../config');
const { StatusCodes } = require('http-status-codes');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            if(!response) {
                throw new Error("Not able to find the resource", StatusCodes.NOT_FOUND);
            }
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

    async destroy(id) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: id
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