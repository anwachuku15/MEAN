var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.send('<h1>Welcome to Cars & Cats</h1>');
})

app.use(express.static(__dirname + '/static'));

app.listen(8000, function(){
	console.log('listening on port 8000')
})