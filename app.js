var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(__dirname + '/public'));