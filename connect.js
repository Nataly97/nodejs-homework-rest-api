require("dotenv").config();
const mongoose = require('mongoose');

//Conexión a DB
const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_MONGODB);
        console.log('Database connection successful');
    } catch (error) {
        console.log(`Error de conexión: ${error}`);
        process.exit(1);
    }
   
}

module.exports ={
    connect,
}