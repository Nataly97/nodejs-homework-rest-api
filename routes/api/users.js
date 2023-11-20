const express = require('express');
const userRouter = express.Router();
const controller = require('../../controllers/users/index');
const validateToken = require('../../middleware/validateToken');

userRouter.post("/signup", validateToken, controller.postUser);
userRouter.post("/login", controller.loginUser);
    
module.exports = userRouter;