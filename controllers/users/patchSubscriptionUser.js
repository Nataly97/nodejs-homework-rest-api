const service = require('../../services/users');
const validSchema = require("../../models/userSchemaValidations")

const updateSubscriptionUser = async (req, res) => {
    try {
        const userId = await req.user._id;
        const body = await req.body;
        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({ message: "Missing field subscription" });
        } else {
            //Validación del Schema
            const { error } = validSchema.patchUserSchemaValidations(body);
            if (error !== undefined) {
                res.status(404).json({ message: 'Not found' });
            } else {
                const result = await service.updateSubscriptionUser(userId, body);
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

module.exports = updateSubscriptionUser