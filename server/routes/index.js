var express = require('express');
var router = express.Router();
var path = require('path')

router.route('/')
    .get(function (req, res) {
        res.render('index', {
            pageTitle: "Carl Schriever",
            pageDescription: "My personal website.",
            pageCss: ['main'],
            pageScripts: ['main.bundle'],
        });
    });

module.exports = router;