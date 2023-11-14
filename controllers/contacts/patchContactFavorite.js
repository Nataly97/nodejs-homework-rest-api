const service = require('../../services/contacts')
const validSchema = require("../../models/contactSchemaValidations")

const patchContactFavorite = async (req, res) => {
    try {
        const contactId = req.params.contactId;
        const body = req.body;
        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({ message: "Missing field favorite" });
        } else {
            //Validación del Schema
            const { error } = validSchema.patchSchemaValidations(body);
            if (error !== undefined) {
                res.status(404).json({ message: 'Not found' });
            } else {
                const result = await service.updateFavoriteContact(contactId, body);
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

module.exports = patchContactFavorite