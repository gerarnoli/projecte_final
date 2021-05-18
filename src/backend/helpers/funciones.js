var db = require('../models');

exports.getCcaas = function(req, res){
    db.vacuna.find()
    .then(function(ccaa){
        res.json(ccaa);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getCcaa = function(req, res){
    db.vacuna.findById(req.params.Id)
    .then(function(foundCcaa){
        res.json(foundCcaa);
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;