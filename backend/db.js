const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/inotebook"
// const mongoURI = "mongodb://localhost:27017/"

const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo succesfully");
}

module.exports = connectToMongo;