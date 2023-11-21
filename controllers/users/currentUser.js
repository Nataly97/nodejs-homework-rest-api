const service = require('../../services/users');

const currentUser = async (req, res) => {
    try {
        const user = await req.user;
        const result = await service.currentUser(user);
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = currentUser