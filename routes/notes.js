const express = require('express');
const router = express.Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// Get all Notes
router.get('/', (res, req) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

module.exports = router;