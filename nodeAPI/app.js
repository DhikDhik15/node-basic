const express = require('express')
const app = express()
const morgan = require('morgan')
const postRoutes = require('./routes/post')
const myMiddleware = (req, res, next) => {
  console.log("MIDDLEWARE START");
  next();
};

/*1. LESSON (without routes) */
// app.get("/", (req, res) => {
//   res.send("hallo");
// });

/*2. LESSON (call routes)*/
app.get("/", postRoutes.getPost);

/*3. LESSON (MIDDLEWARE)*/
app.use(morgan('dev'));
app.use(myMiddleware);

const port = 3010;
app.listen(port, () => {
  console.log(`API on port: ${port}`);
});
