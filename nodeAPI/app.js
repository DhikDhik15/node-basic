const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose');

const postRoutes = require('./routes/post')
// const myMiddleware = (req, res, next) => {
//   console.log("MIDDLEWARE START");
//   next();
// };
const dotenv = require('dotenv')
dotenv.config()

//db connection
mongoose.connect(
    process.env.MONGO_URI, {
      useNewUrlParser: true
    }
  )
  .then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

/*1. LESSON (without routes) */
// app.get("/", (req, res) => {
//   res.send("hallo");
// });

/*2. LESSON (call routes)*/
//app.get("/", postRoutes.getPost);

/*3. LESSON (MIDDLEWARE)*/
app.use(morgan('dev'));
//app.use(myMiddleware);

app.use("/", postRoutes);

//const port = 3010;
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`API on port: ${port}`);
});
