const service = require('../../services/contacts')
const validSchema = require("../../models/contactSchemaValidations")

const postContact = async (req, res) => {
    try {
        const body = req.body;
        const owner = await req.user._id;
        //Validación del Schema
        const { error } = validSchema.postSchemaValidations(body);
        if (error !== undefined) {
            res.status(400).send({ message: 'Missing required name field' });
        } else {
            const result = await service.addContact({...body, owner});
            res.status(201).json(result);
        }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = postContact