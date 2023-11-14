const express = require('express');
const routerContacs = express.Router()
const controller = require("../../controllers/contacts/index")

routerContacs.get('/', controller.getContacts);
routerContacs.get('/:contactId', controller.getContactById);
routerContacs.post('/', controller.postContact);
routerContacs.delete('/:contactId', controller.deleteContactById);
routerContacs.put('/:contactId', controller.putContactById);
routerContacs.patch('/:contactId/favorite', controller.patchContactFavorite);

module.exports = routerContacs
