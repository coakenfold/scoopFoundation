var express = require('express');
var path = require('path');

var app = express();

console.log(__dirname);
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on', port);
});

setInterval(function() {
  app.get("https://scoop-foundation.herokuapp.com/");
}, 300000);
