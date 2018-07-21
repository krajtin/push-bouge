'use strict';

var express         = require('express');
var
gameport        = process.env.PORT || 3000,

express         = require('express'),
http            = require('http'),
app             = express(),
server          = http.createServer(app);
var path = require('path');
var bodyParser = require('body-parser');
server.listen(gameport)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,limit:30971520}));
app.use("/",express.static(path.join(__dirname, 'public')));

app.get( '/', function( req, res ){
	
	res.sendFile(path.join(__dirname,"public","index.html"));
});

