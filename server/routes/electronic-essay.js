var express = require('express');
var router = express.Router();
var path = require('path')

router.route('/electronic-essay')
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, '../../client/electronic-essay.html'));
    });

module.exports = router;