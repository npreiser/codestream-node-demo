require("newrelic");

var express = require('express');
var router = express.Router();

/* GET home page. */
var cm_mod1 = require("../controllers/custom_module1");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// hotmail user added comments here. 
// more comments here for test 
// this is nick trying to fix this status code
//this is to test feedback request 1 
router.get('/forcerr', function(req, res, next) {
  res.status(500).send("slakdsjslfkj")
});



router.get('/forcestackerr', function(req, res, next) {

  cm_mod1.customfunc1(34);



  res.status(500).send("slakdsjslfkj")
});


router.get('/force404', function(req, res, next) {

  cm_mod1.customfunc2(34);

  res.status(505).send("slakdsjslfkj")
});


router.get('/forcevalerror', function(req, res, next) {

  cm_mod1.customfunc3(34);

  res.status(505).send("slakdsjslfkj")
});







module.exports = router;
