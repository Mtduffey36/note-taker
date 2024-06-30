const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');
const notes = require('./routes/notes');

const port = process.env.PORT || 3001;

const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/notes', notes);



  
app.listen(port, () => console.log(`Server is running on port ${port}`));
  
