var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('host', (process.env.HOST || '127.0.0.1'));

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), app.get('host'), function () {
  console.log('Server started: ' + app.get('host') + ':' + app.get('port') + '/');
});