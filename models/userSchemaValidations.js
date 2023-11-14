const joi = require('joi');
const userSchemaValidations = (body) => {
    const Schema = joi.object({
        email: joi.string().required(),
        password: joi.string().required(),
    });
    return Schema.validate(body);
}

module.exports = {
    userSchemaValidations
}