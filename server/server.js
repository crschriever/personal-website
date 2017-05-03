var path = require('path');
var express = require('express');
var app = express();
var nconf = require('nconf');

// Use config file for nconf
nconf.file(getPath('server/config.json'));

// If environment is dev then use morgan
if (nconf.get("env") === "dev") {
    var morgan = require('morgan');
    // use morgan to log requests to the console
    app.use(morgan('dev'));
} 



app.use('/css', express.static(getPath('client/css')));
app.use('/js', express.static(getPath('client/js')));
app.use('/res', express.static(getPath('client/res')));
app.use(require('./routes/index'));
app.use(require('./routes/electronic-essay'));
app.use(function (req, res, next) {
    res.status(404).send("<p>This page doesn't exist</p><a href=\"/\">return to home</a>");
});

var port = nconf.get("http:port");
var server = app.listen(port || 8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("App listening at http://%s:%s", host, port);
});

function getPath(p) {
    return path.join(__dirname, '../' + p);
}