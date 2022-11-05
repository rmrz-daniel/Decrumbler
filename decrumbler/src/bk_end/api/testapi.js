const express = require('express');
const { db } = require('../models/user');
const router = express.Router();
const mongoose = require("mongoose");

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
router.put('/test/:collectionName/:Subnet',
    function (req, res, next) {
       var coll = require('../models/test')(req.params.collectionName); 

        coll.findOneAndUpdate({Subnet: req.params.Subnet}, req.body).then(
            function (data) {
                res.send(data)
            }
        ).catch(next);
    }
);


let userSchema = require('../models/user');

router.get('/get-user/:Username',
    function (req, res, next) {

        userSchema.findOne({Username: req.params.Username}).then(
            function (users) {
                res.send(users)
            }
        ).catch(next);
    }
);

router.post('/create-user',
    function (req, res, next) {

        userSchema.create(req.body).then(
            function (users) {
                res.send(users)
            }
        ).catch(next);
    }
);

router.put('/update-user/:Username',
    function (req, res, next) {
        
        userSchema.findOneAndUpdate({Username: req.params.Username}, req.body).then(
            function (users) {
                userSchema.findOne({Username: req.params.Username}).then(
                    function(users) {
                        res.send(users);
                    }
                )
            }
        ).catch(next);
    }
);

router.get('/cols/',
    function (req, res, next) {
        mongoose.connect('mongodb://127.0.0.1/cookies', function(err, client){
            mongoose.connection.db.listCollections().toArray(function(err, col){
                res.send(col)
            })
        })
    }
);


module.exports = router;

