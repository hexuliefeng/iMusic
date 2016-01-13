var express = require('express');
var musicService = require('../services/musicService')
var router = express.Router();

router.post('/query', function (req, res, next) {
    var data = {};
    musicService.query(data, function (err, results) {
        if (err) {
            return;
        }
        res.send(results);
    });
});

router.post('/queryById', function (req, res, next) {
    var data = {_id: req.body.id};
    musicService.query(data, function (err, results) {
        if (err) {
            return;
        }
        res.send(results);
    });
});

router.post('/delete', function (req, res, next) {
    var data = req.body.ids;
    musicService.delete(data, function (err, results) {
        if (err) {
            return;
        }
        res.send('ok');
    });
});

router.post('/insert', function (req, res, next) {
    var data = {
        name: req.body.name,
        path: req.body.path,
        author: req.body.author,
        type: req.body.type
    };
    musicService.insert(data, function (err) {
        if (err) {
            return;
        }
        res.send({msg: 'ok'});
    });
});

router.post('/update', function (req, res, next) {
    var data = {
        _id: req.body._id,
        name: req.body.name,
        path: req.body.path,
        author: req.body.author,
        type: req.body.type
    };
    musicService.update(data, function (err) {
        if (err) {
            return;
        }
        res.send({msg: 'ok'});
    });
});


module.exports = router;