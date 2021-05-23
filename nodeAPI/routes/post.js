const express = require('express')
const postControllers = require('../controllers/post')

const router = express.Router()

router.get('/', postControllers.getPost)


module.exports = router;


// exports.getPost = (req, res) => {
//   res.send("message from routes");
// };

// module.exports = {
//   getPost
// };
