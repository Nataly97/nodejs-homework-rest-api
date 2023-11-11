const service = require('../../services/contacts')

const getContactById = async (req, res) => {
    try {
        const contactId = req.params.contactId;
        const result = await service.getContactById(contactId);
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: 'Not found' });
        }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = getContactById
