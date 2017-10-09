var express = require('express');
var router = express.Router();
var path = require('path')

router.route('/info/:page')
    .get(function (req, res, next) {
        res.render(`./content/info/${req.params.page}`, {
            pageTitle: "Carl Schriever",
            pageDescription: "My personal website.",
            pageCss: ['info'], 
            pageScripts: ['info.bundle'],
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