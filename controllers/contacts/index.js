const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const postContact = require("./postContact");
const deleteContactById = require("./deleteContactById");
const putContactById = require("./putContactById");
const patchContactFavorite = require("./patchContactFavorite");

module.exports={
    getContacts,
    getContactById,
    postContact,
    deleteContactById,
    putContactById,
    patchContactFavorite,
}