const service = require('../../services/contacts')

const putContactById = async (req, res) => {
    try {
        const contactId = req.params.contactId;
        const body = req.body;
        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({ message: "Missing fields" });
        } else {
            const result = await service.updateContact(contactId, body);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}
module.exports = putContactById