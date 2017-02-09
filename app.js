var express = require('express');
var app = express();
var http = require('http').Server(app);

// configure app ======================================================================
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// internal modules ======================================================================
require(__dirname + '/routes.js')(app);
require(__dirname + '/events.js')(app);


// HTTP ======================================================================
http.listen(3000, function (req, res) {
  console.log('listening on *:3000');
});

