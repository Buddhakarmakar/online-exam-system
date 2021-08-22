const router=require('express').Router()
const User=require('../models/userSchema')
const bcrypt = require('bcrypt');
const multer=require('multer')
router.get('/register',async (req,res)=> {
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
    const user =await new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }
    )
    await user.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })

    res.status(200).send("ok")
})

router.post('/login',async (req,res)=>{

    try{
        const found=await User.findOne({email: req.body.email});
        !found && await res.status(404).json('User not found')
        if(found){
            const matchPassword=  await bcrypt.compare(req.body.password, found.password)

            !matchPassword && await res.status(400).json("Password not match")
            if(matchPassword){
                const userData={
                    email:found.email,
                    name:found.name
                }
                await res.status(200).json(userData)
            }

        }



    }catch(err){
            console.log(err)
    }

})

//upload a file

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,Date.now() + file.originalname )// '-' + uniqueSuffix)
    }
})

var upload = multer({ storage: storage })


router.post('/upload_image',upload.single("file"),async (req,res)=>{
    try{
        console.log("Uploading file")
        await res.status(200).json("File uploaded successfully")
    }catch(err){
        console.log(err)
        await res.status(500).json('Failed to upload file')
    }
})
module.exports = router