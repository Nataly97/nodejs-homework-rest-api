const joi = require('joi');
const userSchemaValidations = (body) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    });
    return Schema.validate(body);
}

const patchUserSchemaValidations = (body) => {
    const Schema = joi.object({
        subscription: joi.string().required(),
    });
    return Schema.validate(body);
}
module.exports = {
    userSchemaValidations,
    patchUserSchemaValidations,
}