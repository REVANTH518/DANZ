const { DB_URL, DB_NAME, DB_PW, DB_USER, DB_CLUSTER} = require('./config.js');
const mongoose = require('mongoose');
const mongoString = `${DB_URL}${DB_USER}:${DB_PW}${DB_CLUSTER}${DB_NAME}`
console.log(mongoString)
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
async function dbClose() {
    console.log("closing connection")
    await database.close()
}
module.exports = { database: database, dbClose }