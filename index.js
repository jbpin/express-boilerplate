var express = require('express');
var app = express();
var cons = require('consolidate');


app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

app.use('/public',express.static(require('path').join(__dirname, '/public')));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.engine('html', cons.dust);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', require('./routes/index.js'));

app.listen(3000);
console.log('Listening on port 3000');