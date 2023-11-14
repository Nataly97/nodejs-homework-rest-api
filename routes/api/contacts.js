const express = require('express');
const router = express.Router()
const controller = require("../../controllers/contacts/index")

router.get('/', controller.getContacts);
router.get('/:contactId', controller.getContactById);
router.post('/', controller.postContact);
router.delete('/:contactId', controller.deleteContactById);
router.put('/:contactId', controller.putContactById);
router.patch('/:contactId/favorite', controller.patchContactFavorite);

module.exports = router
