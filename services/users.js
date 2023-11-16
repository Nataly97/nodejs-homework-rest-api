const bcrypt = require('bcrypt')
const User = require("../models/userSchema");

const createUser = async (Data) => {
    try {
        //Validación de correo
        const user = await User.findOne({
            email: Data.email,
        })
        if (user) {
            return false
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

module.exports = {
    createUser,
}