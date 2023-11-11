const service = require('../../services/contacts')

const getContacts = async (req, res) => {
    try {
        const result = await service.listContacts();
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = getContacts;