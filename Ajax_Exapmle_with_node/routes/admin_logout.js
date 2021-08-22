var express = require('express');
var router = express.Router();
/* GET users listing. */
router.post('/logout', function(req, res) {

    req.session.destroy();

    if(req.body.adminSignin){
        console.log("Cannot log out")
    }
    else{
        console.log('Log in first\n try to log out')

       // res.redirect('/')
        output={"success":true}
        res.send(output)
    }


});
module.exports = router;