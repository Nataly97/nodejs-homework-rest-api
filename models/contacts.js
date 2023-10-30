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
    const contact = result.find(contact => contact.id === contactId)
    return contact
  } catch (error) {
    console.log(error)
  }
}

//Función para eliminar contactos por Id
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

//Función para crear un nuevo contacto 
const addContact = async (body) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    phone: joi.string().required(),
  });
  try {
    let result = JSON.parse((await fs.readFile(pathContacts)).toString());
    await schema.validateAsync({
      name: body.name,
      email: body.email,
      phone: body.phone,
    });
    let newContact = { id: nanoid.nanoid(), ...body };
    result.push(newContact);
    await fs.writeFile(pathContacts, JSON.stringify(result, null, 2));
    return newContact;
  } catch (error) {
    console.log(error)
  }
}

//Función para actualizar contacto por Id
const updateContact = async (contactId, body) => {
  const schema = joi.object({
    name: joi.string().allow('').optional(),
    email: joi.string().allow('').optional(),
    phone: joi.string().allow('').optional(),
  });
  try {
    const result = JSON.parse((await fs.readFile(pathContacts)).toString());
    for (contact of result) {
      if (contact.id == contactId) {
        contact.name = body.name ? body.name : contact.name
        contact.email = body.email ? body.email : contact.email;
        contact.phone = body.phone ? body.phone : contact.phone;
        const { error } = schema.validate(body);
        if (!error) {
          await fs.writeFile(pathContacts, JSON.stringify(result, null, 2))
          return contact
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
