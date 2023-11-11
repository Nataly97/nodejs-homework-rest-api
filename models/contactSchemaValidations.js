const joi = require('joi');

const postSchemaValidations = async (body) => {
    try {
        const Schema = await joi.object({
            name: joi.string().required(),
            email: joi.string().required(),
            phone: joi.string().required(),
            favorite: joi.boolean().allow('').optional()
        });
        return Schema.validateAsync(body);
    } catch (err) {
        return err;
    }
}

const putSchemaValidations = async (body) => {
    try {
        const Schema = await joi.object({
            name: joi.string().allow('').optional(),
            email: joi.string().allow('').optional(),
            phone: joi.string().allow('').optional(),
            favorite: joi.boolean().allow('').optional(),
        });
        return Schema.validateAsync(body);
    } catch (err) {
        return err;
    }
}

const patchSchemaValidations = async (body) => {
    try {
        const Schema = await joi.object({
            favorite: joi.boolean().required(),
        });
        return Schema.validateAsync(body);
    } catch (err) {
        return err;
    }
}

module.exports = { 
    postSchemaValidations, 
    putSchemaValidations, 
    patchSchemaValidations,
}