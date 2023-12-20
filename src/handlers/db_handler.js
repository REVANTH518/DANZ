const {Movies, dbClose} = require('../models/movies');

// creating movie entry in database
const createMovieInDatabase = async (movieInfo) => {
    try {
        const info = await Movies.create(movieInfo);
        console.log(`Movie ${info} created!`);
        return info;
    } catch (error) {
        console.error(`Failed to create movie ${movieInfo} error: ${error.message}`);
        throw new Error(error.message);
    }
};
// update movie in db based on id
const updateMovieInfo = async (id, movieInfo) => {
    try {
        return await Movies.updateOne({ _id: id }, movieInfo)
    } catch (err) {
        console.error(`Failed to update movie ${movieInfo} error: ${error.message}`);
        throw new Error(error.message);
    }
}

const listMovies = async () => {
    try {
        return await Movies.find()
    } catch (err) {
        console.error(`Failed to list movies error: ${error.message}`);
        throw new Error(error.message);
    }
}

const deleteMovies = async (id) => {
    try {
        return await Movies.deleteOne({ _id: id })
    } catch (err) {
        console.error(`Failed to delete movie ${id} error: ${error.message}`);
        throw new Error(error.message);
    }
}

const searchMovies = async (wherClouse) => {
    try {
        return await Movies.find(wherClouse);
    } catch (err) {
        console.error(`Failed to search movies error: ${error.message}`);
        throw new Error(error.message);
    }
}


module.exports = {
    createMovieInDatabase,
    updateMovieInfo,
    listMovies,
    deleteMovies,
    searchMovies,
    dbClose
}
