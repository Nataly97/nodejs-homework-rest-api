const service = require('../../services/users');
const validSchema = require('../../models/userSchemaValidations');

const patchAvatarUser = async (req, res) => {
    try {
        const avatarURL = req.file.path;
        const userId = await req.user._id;
        console.log({avatarURL})
        //Validación del Schema
        // const { error } = validSchema.patchAvatarUser({avatarURL});
        // if (error !== undefined) {
        //     res.status(400).send({ message: 'Error de Joi u otra biblioteca de validación' });
        // } else {
            const result = await service.patchAvatarUser(userId, avatarURL);
            if (!result) {
                res.status(401).send({ message: 'Not authorized' });
            } else {
                res.status(200).json(result);
            }
        // }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = patchAvatarUser