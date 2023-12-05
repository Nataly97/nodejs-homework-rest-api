const express = require('express');
const routerContacts = require('./contacts');
const routerUser = require('./users');
const routerAvatar = require('./avatars')

const routerIndex = express.Router();

module.exports = () => {
    routerIndex.use('/contacts', routerContacts);
    routerIndex.use('/users', routerUser);
    routerIndex.use('/avatars', routerAvatar);
    return routerIndex;
}