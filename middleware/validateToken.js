const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const validateToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({
                message: 'Not aurhiorized'
            });
        };
        const token = req.headers.authorization.split(" ")[1];
        const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET);
        // Verifica si el usuario existe en la base de datos
        const user = await User.findById(verifyToken._id);
        if (!user || !user.token) {
            return res.status(401).send({
                message: 'Not aurhiorized'
            });
        } else {
            req.user = user;
            next();
        }
    } catch (error) {
        return res.status(401).send({
            message: 'Not aurhiorized'
        });
    }
}


module.exports = validateToken;