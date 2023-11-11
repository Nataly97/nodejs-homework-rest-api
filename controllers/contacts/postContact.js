const service = require('../../services/contacts')

const postContact = async (req, res) => {
    try {
        const body = req.body;
        const result = await service.addContact(body);
        if (result) {
            res.status(201).json(result);
        } else {
            res.status(400).send({ message: 'Missing required name field' })
        }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = postContact