const express = require('express');
const userRouter = express.Router();
const controller = require('../../controllers/users/index');
const validateToken = require('../../middleware/validateToken');

userRouter.post("/signup", controller.postUser);
userRouter.post("/login", controller.loginUser);
userRouter.get("/logout", validateToken, controller.logoutUser);
userRouter.get("/current", validateToken, controller.currentUser);
    
module.exports = userRouter;