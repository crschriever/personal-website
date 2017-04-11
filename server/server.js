var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var express = require('express');
var app = express();

app.use('/css', express.static(getPath('client/css')));
app.use('/js', express.static(getPath('client/js')));
app.use('/res', express.static(getPath('client/res')));

app.route('/')
    .get(function (req, res) {
        res.sendFile(getPath('client/index.html'));
    });

app.route('*.css', function (req, res) {
    res.send()
});

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("App listening at http://%s:%s", host, port);
});

function getPath(p) {
    return path.join(__dirname, '../' + p);
}