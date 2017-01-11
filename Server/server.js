var express = require('express');
var cors = require('cors');

var path = require('path');

var app = require('express')();
var text;

var port = 8080;
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static(__dirname +'/site'));


app.post('/post', function (req, res, next){
    console.log(req.body); 
    res.send('200').end(); 
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './site', 'index_tabs.html'));
});
app.listen(port);
