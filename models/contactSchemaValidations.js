const joi = require('joi');

const postSchemaValidations = (body) => {
    const Schema = joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        phone: joi.string().required(),
        favorite: joi.boolean().allow('').optional()
    });
    return Schema.validate(body);
}

const putSchemaValidations = (body) => {
    const Schema = joi.object({
        name: joi.string().allow('').optional(),
        email: joi.string().allow('').optional(),
        phone: joi.string().allow('').optional(),
        favorite: joi.boolean().allow('').optional(),
    });
    return Schema.validate(body);
}

const patchSchemaValidations = (body) => {
    const Schema = joi.object({
        favorite: joi.boolean().required(),
    });
    return Schema.validate(body);
}

module.exports = {
    postSchemaValidations,
    putSchemaValidations,
    patchSchemaValidations,
}