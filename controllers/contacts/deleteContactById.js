const service = require('../../services/contacts')

const deleteContactById = async (req, res) => {
    try {
        const contactId = req.params.contactId;
        const result = await service.removeContact(contactId);
        if (result === true) {
            res.status(200).json({ message: "Contacto eliminado" })
        } else {
            res.status(404).json({ message: 'Not found' })
        }
    } catch (error) {
        return res.status(500).json({
            result: null,
            message: error,
        });
    }
}

module.exports = deleteContactById