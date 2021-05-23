var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/vacuna');

mongoose.Promise = Promise;

module.exports.Ccaa = require("./ccaa");