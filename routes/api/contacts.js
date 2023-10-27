const express = require('express');
const router = express.Router()
const controller = require('../../models/contacts')

router.get('/', async (req, res) => {
  const result = await controller.listContacts();
  res.status(200).json(result);
})

router.get('/:contactId', async (req, res, next) => {
  const contactId = req.params.contactId;
  const result = await controller.getContactById(contactId);
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(404).json({ message: 'Not found' });
  }
})

router.post('/', async (req, res, next) => {
  const body = req.body;
  const result = await controller.addContact(body);
  if (result){
    res.status(201).json(result);
  } else {
    res.status(400).send({ message: 'Missing required name field' })
  }
})

router.delete('/:contactId', async (req, res, next) => {
  const contactId = req.params.contactId;
  const result = await controller.removeContact(contactId);
  if (result === true) {
    res.status(200).json({ message: "Contacto eliminado" })
  } else {
    res.status(404).json({ message: 'Not found' })
  }
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
