const Post = require('../models/post')

exports.getPost = (req, res) => {
  //res.send("message from routes");
  res.json({
    posts: [
      {title: 'Respon json1'},
      {
        title: 'Respon json2'
      }
    ]
  })
};

exports.createPost = (req, res) => {
   const post = new Post(req.body);
   //console.log("CREATING POST", req.body);
   post.save((err, result) => {
     if(err){
       return res.status(400).json({
         error:  err
       });
     }
     res.status(200).json({
       post: result
     });
   });
};
