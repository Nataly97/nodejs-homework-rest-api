const joi = require('joi');
const userSchemaValidations = (body) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
        subscription: joi.string().valid("starter", "pro", "business"),
    });
    return Schema.validate(body);
}

const patchUserSchemaValidations = (body) => {
    const Schema = joi.object({
        subscription: joi.string().valid("starter", "pro", "business"),
    });
    return Schema.validate(body);
}
const patchAvatarUser = (body) => {
    const Schema = joi.object({
        avatarURL: joi.string().required,
    });
    return Schema.validate(body);
}
module.exports = {
    userSchemaValidations,
    patchUserSchemaValidations,
    patchAvatarUser
}