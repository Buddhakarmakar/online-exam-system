var express = require('express');
var router = express.Router();
router.get('/get-ans',function(req, res,next){
    console.log("hi buddhadeb");
})
router.post('/get-ans',function(req, res,next){
    console.log("karmakar");
})
module.exports = router;