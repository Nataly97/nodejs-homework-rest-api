const service = require('../../services/users');

const logoutUser = async (req, res) => {
    try {
        const body = await req.body;
        const result = await service.logoutUser(body);
        if (!result) {
            res.status(401).send({ message: 'Not authorized' });
        } else {
            res.status(204).json();
        }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = logoutUser