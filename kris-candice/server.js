'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));
// The files are in the public directory now because those are the only files that will be made public to the client. Express.js takes our database and serves it to the client when a HTTP request is recieved.
app.use(express.static('./public'));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.use(function (req, res) {
  res.status(404).send('sorry can\'t find that!');
});

app.get('/public/new.html', (req, res) => {
  res.send('you found it!');
});

app.listen(PORT, function () {
  console.log('heard PORT 3000');
});