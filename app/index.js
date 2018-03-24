var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use('/images', express.static(__dirname + '/images'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/main.html', function(req, res) {
  res.sendFile(__dirname + '/main.html');
});

app.get('/confirmationPage.html', function(req, res) {
  res.sendFile(__dirname + '/confirmationPage.html');
});

app.get('/payPage.html', function(req, res) {
  res.sendFile(__dirname + '/payPage.html');
});

app.get('/reloadPage.html', function(req, res) {
  res.sendFile(__dirname + '/reloadPage.html');
});

app.listen(port, function() {
  console.log('local port number: ' + port);
});
