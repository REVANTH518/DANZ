const mongoose = require('mongoose');
var { database, dbClose } = require('../db');
var Schema = mongoose.Schema;

var MoviesSchema = new Schema({
    title: {
        required: true,
        type: String,
        index: true
    },
    genre: {
        required: true,
        type: String,
        index: true
    },
    rating: {
        required: true,
        type: Number
    },
    streamingLink: {
        required: false,
        type: String
    }
});
MoviesSchema.index(
    { title: 1, genre: 1},
    { unique: true })
module.exports = {Movies: database.model('Movies', MoviesSchema), dbClose};