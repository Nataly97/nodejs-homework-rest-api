const e = require('cors');
const fs = require('fs/promises');
const path = require('path');
const pathContacts = path.join(__dirname, "../models/contacts.json");

const listContacts = async () => {
  try {
    const result = JSON.parse((await fs.readFile(pathContacts)).toString());
    return result;
  } catch (error) {
    console.log(error)
  }
}

const getContactById = async (contactId) => { }

const removeContact = async (contactId) => { }

const addContact = async (body) => { }

const updateContact = async (contactId, body) => { }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
