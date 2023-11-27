const express = require('express');
const routerContacs = express.Router();
const controller = require("../../controllers/contacts/index");
const validateToken = require('../../middleware/validateToken');

routerContacs.get('/', validateToken, controller.getContacts);
routerContacs.get('/:contactId', validateToken, controller.getContactById);
routerContacs.post('/', validateToken, controller.postContact);
routerContacs.delete('/:contactId', validateToken, controller.deleteContactById);
routerContacs.put('/:contactId', validateToken, controller.putContactById);
routerContacs.patch('/:contactId/favorite', validateToken, controller.patchContactFavorite);

module.exports = routerContacs
