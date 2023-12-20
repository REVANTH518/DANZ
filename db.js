const mongoose = require('mongoose');
//const mongoString = "mongodb+srv://revanth518:KgdPVS4tceVNgG2F@cluster0.kq8x3l1.mongodb.net/";
const mongoString = "mongodb+srv://revanth518:KgdPVS4tceVNgG2F@cluster0.nypmr3p.mongodb.net/"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000,
    socketTimeoutMS: 20000,
    heartbeatFrequencyMS: 10000,
    retryWrites: true,
};
mongoose.connect(mongoString, options);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

database.once('connected', () => {
    console.log('Database Connected');
})

module.exports = { database: database }