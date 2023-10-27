const e = require('cors');
const fs = require('fs/promises');
const path = require('path');
const pathContacts = path.join(__dirname, "../models/contacts.json");

const nanoid = require('nanoid');
const joi = require('joi');

//Función para listar contactos 
const listContacts = async () => {
  try {
    const result = JSON.parse((await fs.readFile(pathContacts)).toString());
    return result;
  } catch (error) {
    console.log(error)
  }
}

//Función para filtrar contactos por Id 
const getContactById = async (contactId) => {
  try {
    const result = JSON.parse((await fs.readFile(pathContacts)).toString());
    for (contact of result) {
      if (contact.id == contactId) {
        return contact;
      }
    }
  } catch (error) {
    console.log(error)
  }
}

//Función para eliminar contactos por Id
const removeContact = async (contactId) => {
  try {
    let result = JSON.parse((await fs.readFile(pathContacts)).toString());
    for (contact of result) {
      if (contact.id === contactId) {
        result.splice(result.indexOf(contact), 1);
        await fs.writeFile(pathContacts, JSON.stringify(result, null, 2));
        return true;
      }
    }
  } catch (error) {
    console.log(error)
  }
}

//Función para crear un nuevo contacto 
const addContact = async (body) => {
  body.id = nanoid.nanoid();
  const schema = joi.object({
    id: joi.string().required(),
    name: joi.string().required(),
    email: joi.string().required(),
    phone: joi.number().required(),
  })
  try {
    let result = JSON.parse((await fs.readFile(pathContacts)).toString());
    let newContact = await schema.validateAsync( {
      id: body.id,
      name: body.name,
      email: body.email,
      phone: body.phone,
    })
    result.push(newContact);
    await fs.writeFile(pathContacts, JSON.stringify(result, null, 2))
    console.log
    return newContact;
  } catch (error) {
    console.log(error)
  }
}

//Función para actualizar contacto por Id
const updateContact = async (contactId, body) => { }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
