const express = require('express');
const { createMovieInDatabase, updateMovieInfo, listMovies, deleteMovies, searchMovies , dbClose} = require('../handlers/db_handler.js');
const router = express.Router();
// router for registering user
router.post('/movies', async (req, res) => {
  try {
    let {
      title, genre, rating, streaminglink
    } = req.body;
    let {
      role
    } = req.headers;
    console.log(role)
    const movieInfo = {
      title, genre, rating, streamingLink: streaminglink ? streaminglink : " "
    }
    if (role === "admin") {
      const data = await createMovieInDatabase(movieInfo);
      return res.status(201).json(data);
    } else {
      return res.status(403).json({ message: "User not authirised to create entry" })
    }
  } catch (err) {
    console.error(`Failed to create movie ${req.body.title}`);
    return res.status(400).json({ error: err.message });
  }
});

//  router for log in user and returens token with user info
router.put('/movies/:id', async (req, res) => {
  try {
    let {
      title, genre, rating, streaminglink
    } = req.body;
    let {
      role
    } = req.headers;
    let {
      id
    } = req.params;
    if (role === "admin") {
      const movieInfo = {}
      if (title) movieInfo.title = title;
      if (genre) movieInfo.genre = genre;
      if (rating) movieInfo.rating = rating;
      if (streaminglink) movieInfo.streamingLink = streaminglink;
      const info = await updateMovieInfo(id, movieInfo)
      return res.status(201).json(info);
    } else {
      return res.status(403).json({ message: "User not authirised to update entry" });
    }
  } catch (err) {
    console.error(`Failed to update movie ${req.body}`);
    return res.status(400).json({ error: err.message });
  }
});

router.get('/movies', async (req, res) => {
  try {
    const info = await listMovies()
    return res.status(201).json(info);
  } catch (err) {
    console.error(`Failed to list movies`);
    return res.status(400).json({ error: err.message })
  }
});

router.delete('/movies/:id', async (req, res) => {
  try {
    let {
      role
    } = req.headers;
    let {
      id
    } = req.params;
    if (role === "admin") {
      const info = await deleteMovies(id)
      return res.status(201).json(info);
    } else {
      return res.status(403).json({ message: "User not authirised to delete entry" })
    }
  } catch (err) {
    console.error(`Failed to list movies`);
    return res.status(400).json({ error: err.message })
  }
});

router.get('/search', async (req, res) => {
  try {
    const {title, genre} = req.query;
    const whereClouse = {};
    if(title) whereClouse.title = title;
    if(genre) whereClouse.genre = genre;
    const info = await searchMovies(whereClouse)
    return res.status(201).json(info);
  } catch (err) {
    console.error(`Failed to list movies`);
    return res.status(400).json({ error: err.message })
  }
});


module.exports = { moviesRouter: router, dbClose };
