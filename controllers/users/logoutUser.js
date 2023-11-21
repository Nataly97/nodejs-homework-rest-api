const service = require('../../services/users');

const logoutUser = async (req, res) => {
    try {
        const userId = await req.user._id;
        await service.logoutUser(userId);
        res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = logoutUser