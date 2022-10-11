const express = require('express');
const router = express.Router();

router.post('/test/:collectionName',
    function (req, res, next) {

        var coll = require('../models/test')(req.params.collectionName);
       
        coll.create(req.body).then(
            function (collection) {
                res.send(collection)
            }
        ).catch(next);
    }
);

router.get('/test/:collectionName',
    function (req, res, next) {

        var coll = require('../models/test')(req.params.collectionName);
       
        coll.find({}).then(
            function (collection) {
                if (collection != null) {
                    res.send(collection);
                } else {
                    res.status(404).send('Sorry can\'t find that!')
                }
            }
        ).catch(next);
    }
);

router.put('/test/:collectionName/:_id',
    function (req, res, next) {
        var coll = require('../models/test')(req.params.collectionName);

        coll.findOneAndUpdate({ _id: req.params._id }, req.body).then(
            function (subnet) {
                coll.findOne({ _id: req.params._id }).then(
                    function (subnet) {
                        res.send(subnet)
                    }
                )
            }
        )
    }
)

module.exports = router;

