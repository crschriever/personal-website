var express = require('express');
var router = express.Router();
var path = require('path')

router.route('/demos/:page')
    .get(function (req, res, next) {
        res.render(`./content/demos/${req.params.page}`, {
            pageTitle: "Carl Schriever",
            pageDescription: "My personal website.",
            pageCss: ['demo'], 
            pageScripts: ['demo.bundle'],
        }, function(err, html) {
            if (err) {
                if (err.message.indexOf('Failed to lookup view') !== -1) {
                    console.log('going next');
                    return next();
                }
                throw err;
            }
            res.send(html);
        });
    });

module.exports = router;