var express = require('express');
var app = express();


app.set('views', './views');
app.set('view engine', 'jade');
app.get('/', function(req, res){
	res.render('index', {title: 'My Page'});
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server listening at: port ' + port);