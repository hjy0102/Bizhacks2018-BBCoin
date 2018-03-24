var app = require('express')();
var http = require('http').Server(app);
var path = require('path')
var port = process.env.PORT || 3200;

app.use(app.static(path.join(__dirname, 'images')));
app.use(app.static(path.join(__dirname, 'stylesheets')));

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

http.listen(port, function() {
  console.log('local port number: ' + port);
});
