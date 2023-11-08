const Contact = require("./contactSchema")

//Función para listar contactos 
const listContacts = async () => {
  try {
    let listContacts = await Contact.find();
    return listContacts;
  } catch (error) {
    console.log(error)
  }
}

//Función para filtrar contactos por Id 
const getContactById = async (contactId) => {
  try {
    const contact = await Contact.findById(contactId);
    return contact
  } catch (error) {
    console.log(error)
  }
}

//Función para eliminar contactos por Id
const removeContact = async (contactId) => {
  try {
    await Contact.findByIdAndDelete(contactId);
    return true;
  } catch (error) {
    console.log(error)
  }
}

//Función para crear un nuevo contacto 
const addContact = async (body) => {
  try {
    const contactRegistered = await Contact.create(body);
    return contactRegistered;
  } catch (error) {
    console.log(error)
  }
}

//Función para actualizar contacto por Id
const updateContact = async (contactId, body) => {
  try {
    const contact = await Contact.findByIdAndUpdate(contactId, body);
    return contact
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
