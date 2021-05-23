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
