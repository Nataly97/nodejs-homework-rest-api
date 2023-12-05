const express = require('express');
const routerAvatar = express.Router();
const controller = require('../../controllers/users/index');
const validateToken = require('../../middleware/validateToken');
const { upload } = require('../../middleware/avatar')

routerAvatar.patch("/", upload.single('avatar'), validateToken, controller.patchAvatarUser);

module.exports = routerAvatar;