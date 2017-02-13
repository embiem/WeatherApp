var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// Re-route HTTPS to HTTP
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http') {
      next();
    } else {
      res.redirect('http://' + req.hostname + req.url);
    }
});

// define which folder we want to serve
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
