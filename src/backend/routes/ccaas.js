var express = require('express');
var router = express.Router();
var db = require("../models");

var helpers = require("../helpers/funciones");

router.route('/')
 .get(helpers.getCcaas)

module.exports = router;