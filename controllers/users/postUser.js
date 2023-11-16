const service = require('../../services/users');
const validSchema = require('../../models/userSchemaValidations');

const postUser = async (req, res) => {
    try {
        const body = req.body;
        console.log(body)
        //Validación del Schema
        const { error } = validSchema.userSchemaValidations(body);
        if (req.user) {
            return res.status(409).send({ error: 'Email in use' });
        }
        if (error !== undefined) {
            res.status(400).send({ message: 'Error de Joi u otra biblioteca de validación' });
        } else {
            const result = await service.signUp(body);
            if (result === false) {
                res.status(409).send({ message: 'Email in use' });
            } else {
                res.status(201).json(result);
            }
        }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = postUser