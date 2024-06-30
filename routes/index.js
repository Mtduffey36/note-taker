const express = require('express');
const router = express.Router();


//import routers for notes
const notesRouter = require('./notes');

router.use('/notes', notesRouter);

module.exports = router;