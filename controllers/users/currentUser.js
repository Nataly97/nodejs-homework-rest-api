const currentUser = (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({
            email: user.email,
            subscription: user.subscription,
        });
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = currentUser