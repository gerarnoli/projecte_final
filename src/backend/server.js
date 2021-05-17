var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/vacunas');

mongoose.Promise = Promise;

module.exports.Vacuna = require("./models/ccaa");