const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Cvideo = require('../config/cvideo');

const db = "mongodb://dan:basketball@ds111559.mlab.com:11559/heroku_x3h913x1/cvidoes";

mongoose.connect(db, (err)=>{
    if(err){
        console.log('error connecting to mongodb/cvideos');
    } else {
        console.log('connected to mongodb/cvideos');
    }
});

mongoose.Promise = global.Promise;

router.get('/cvideos', (req, res)=>{
    Cvideo.find({}, {__v:0}).then(
        (cvideos)=>{
            res.json(cvideos);
            console.log('Cvideo.find returns videos');
        })
});

router.post('/addvideo', (req, res)=>{
    newCvideo = new Cvideo();
    newCvideo.title = req.body.title;
    newCvideo.url = req.body.url;
    newCvideo.description = req.body.description;

    newCvideo.save((err, cvideo)=>{
        if(err){ console.log('POST errror');} else{
            res.json(cvideo);
        }
    })
});

router.get('/cvideos/:id', (req, res)=>{
    Cvideo.findById(req.params.id).then(
        (cvideo)=>{
            res.json(cvideo);
        })
});

router.put('/updatecvideo/:id', (req, res)=>{
    Cvideo.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            url: req.body.url,
            description: req.body.description
        }
    },
    {
        new: true
    },
    function(err, updatedCvideo){
        if(err) { console.log('NOPE'); } else{

            res.json(updatedCvideo);
        }
    });

});

router.delete('/cvideos/:id', (req, res)=>{
    Cvideo.findByIdAndRemove(req.params.id).then(
        (cvideos)=>{
            res.json(cvideos);
});
});
module.exports = router;