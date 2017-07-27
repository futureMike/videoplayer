var mongoose = require('mongoose');

var cvideoSchema = mongoose.Schema({
    title: String,
    url: String,
    description: String
});

module.exports = mongoose.model('cvideo', cvideoSchema, 'cvideos');