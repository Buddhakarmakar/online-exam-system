var express = require('express');
var router = express.Router();

router.get('/test',function(req,res,next){
    res.render('test');
    console.log("Viewing test.ejs");
});
router.post('/test',function(req,res,next){
        console.log("Getting data  %s  : %s", req.body.email_address,req.body.pwd);
        abc={'success':true};
        res.send(abc);
}

)
module.exports=router