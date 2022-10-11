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

module.exports = router;

