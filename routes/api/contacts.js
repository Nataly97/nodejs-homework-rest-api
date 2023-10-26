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
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  const contactId = req.params.contactId;
  const result = await controller.removeContact(contactId);
  if (result) {
    res.status(200).json({mensaje: "Contacto eliminado"})
  }else{
    res.status(404).json({ message: 'Not found' })
  }
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
