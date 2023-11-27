const service = require('../../services/users');
const validSchema = require('../../models/userSchemaValidations');

const loginUser = async (req, res) => {
    try {
        const body = req.body;
        //Validación del Schema
        const { error } = validSchema.userSchemaValidations(body);
        if (error !== undefined) {
            res.status(400).send({ message: 'Error de Joi u otra biblioteca de validación' });
        } else {
            const result = await service.loginUser(body);
            if (!result) {
                res.status(401).send({ message: 'Email or password is wrong' });
            } else {
                res.status(200).json(result);
            }
        }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = loginUser