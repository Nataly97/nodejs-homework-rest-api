const bcrypt = require('bcrypt')
const User = require("../models/userSchema");

const signUp = async (Data) => {
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
        const password = await bcrypt.hash(Data.password, salt);

        console.log(password);
        console.log(Data.password);
        return Data
        
        // {
        //     success: true,
        //     result: 1,
        //     message: "Usuario creado",
        // }
    } catch (error) {

    }
}

module.exports = {
    signUp,
}