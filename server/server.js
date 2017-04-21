var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var config = require('./config'); // get our config file
var userTable = require('./models/user'); // get our mongoose model

try {
    //mongoose.connect(config.database); // connect to database
} catch (databaseException) {
    console.log(databaseException);
}
app.set('superSecret', config.secret); // secret variable

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.use('/css', express.static(getPath('client/css')));
app.use('/js', express.static(getPath('client/js')));
app.use('/res', express.static(getPath('client/res')));
app.use(require('./routes/index'));
app.use(require('./routes/electronic-essay'));
app.use(require('./routes/auth'));

app.route('/test/')
    .get(function (req, res) {
        // create a sample user
        var carl = new userModel({ 
            name: 'Carl Schriever', 
            password: 'password',
            admin: true 
        });

        // save the sample user
        carl.save(function(err) {
            if (err) {
                throw err;
            }

            console.log('User saved successfully');
            res.json({ success: true });
        });
    });

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("App listening at http://%s:%s", host, port);
});

function getPath(p) {
    return path.join(__dirname, '../' + p);
}