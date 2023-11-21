const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/userSchema");

const createUser = async (Data) => {
    try {
        //Validación de correo
        const user = await User.findOne({
            email: Data.email,
        })
        if (user) {
            return
        }
        //Hash password
        const salt = await bcrypt.genSalt(10);
        Data.password = await bcrypt.hash(Data.password, salt);
        //Creación de usuario
        const createUser = await User.create(Data);
        return createUser
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (Data) => {
    try {
        //Validación de correo
        const isUser = await User.findOne({ email: Data.email });
        if (!isUser) {
            return
        };
        //Validar contraseña
        const validPassword = await bcrypt.compare(Data.password, isUser.password);
        if (!validPassword) {
            return
        }
        //Generación de Token
        const token = jwt.sign(
            {
                _id: isUser._id,
                email: isUser.email,
                subscription: isUser.subscription,
            },
            process.env.TOKEN_SECRET
        );
        //Guardar token en el usuario
        await User.findOneAndUpdate({ email: isUser.email }, { token });
        return {
            token,
            "user":{
                email: isUser.email,
                subscription: isUser.subscription,
            } 
        };
    } catch (error) {
        console.log(error);
    }
}

const logoutUser = async (Id) =>{
    try {
        const userId = await User.findOne(Id)
        if(!userId){
            return
        }else{
            const newUser = await User.findOneAndUpdate({_id: userId}, { token: null });
            return newUser;
        }
    } catch (error) {
        console.log(error);
    }
}

const currentUser = async (Data) =>{
    try {
        const user = await User.findOne(Data._id)
        if(!user){
            return
        }else{
            return {
                email: user.email,
                subscription: user.subscription,
            };
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    createUser,
    loginUser,
    logoutUser,
    currentUser,
}