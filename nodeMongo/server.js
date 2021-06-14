const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

//db connection
mongoose.connect(
    process.env.MONGO_URL, {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('agiato_trivia Mongo Connected'))

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

//const port = 8000;
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API on port: ${port}`);
});
