const express = require('express');  // R92FZFsPCWPVhKhA
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Post = require('./models/post')

const app = express();

mongoose.connect('mongodb+srv://dan:R92FZFsPCWPVhKhA@cluster0-ktmrm.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Connected to a database!')
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requestsed-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next()
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  })
});

app.get('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'fadsf1234',
      title: 'first server-side post',
      content: 'this is the body of the post'
    },
    {
      id: 'fadsf1234',
      title: 'first server-side post',
      content: 'this is the body of the post'
    }
  ];
  res.status(200).json({
    message: 'posts fethced successfully!',
    posts: posts
  });
});


module.exports = app;
