const express = require('express');
const userRouter = express.Router();
const controller = require('../../controllers/users/index');


userRouter.post("/signup", controller.postUser);
userRouter.post("/login", controller.loginUser);
    
module.exports = userRouter;