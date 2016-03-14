/**
 * Created by Rasumi on 10/12/15.
 */

var http = require('http');
var express = require('express');

var path = require('path');
var bodyParser = require('body-Parser');
var app = express();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/www')));




http.createServer(app).listen(8888, function() {
    console.log('Express App started');

});