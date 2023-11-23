const service = require('../../services/contacts')

const getContacts = async (req, res) => {
    try {
        const userId = await req.user._id;
        const { page=1, limit=20, favorite = true } = req.query;
        const skip = (page - 1) * limit;
        const result = await service.listContacts(skip, limit, favorite, userId);
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = getContacts;