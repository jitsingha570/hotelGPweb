const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectdb =  async() => {
    try{
        const connect  =  await mongoose.connect(process.env.CONECTION_STRING);
        console.log(`Connected to database : host = ${connect.connection.host}, port = ${connect.connection.port}, name = ${connect.connection.name}`);

    }
    catch(error){
        console.log("Error connecting to database: ", error);
        process.exit(1); // Exit the process with failure
    }
};
module.exports = connectdb;