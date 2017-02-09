var express = require('express');
var app = express();
var http = require('http').Server(app);

// configure app ======================================================================
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 5000));

// internal modules ======================================================================
require(__dirname + '/routes.js')(app);
require(__dirname + '/events.js')(app);


// HTTP ======================================================================
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

