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

const getContactById = async (contactId) => {
  try {
    const result = JSON.parse((await fs.readFile(pathContacts)).toString());
    for (contact of result){
      if (contact.id == contactId){
        return contact;
      }
    }
  } catch (error) {
    console.log(error)
  }
 }

const removeContact = async (contactId) => { 
  try {
    let result = JSON.parse((await fs.readFile(pathContacts)).toString());
    const updatedContacts = result.filter(contact => contact.id !== contactId);
    await fs.writeFile(pathContacts, JSON.stringify(updatedContacts, null, 2));
    return true;
  } catch (error) {
    console.log(error)
  }
}

const addContact = async (body) => {

 }

const updateContact = async (contactId, body) => { }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
