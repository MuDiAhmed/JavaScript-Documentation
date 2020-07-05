var http = require('http');
let api = require('./src/api');

//create a server object:
http.createServer(api.login).listen(8080);