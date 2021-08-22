const express=require('express');
const multer=require('multer')
const app=express();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("Hello from storeage")
        cb(null, 'public/')
    },
    filename: function (req, file, cb) {
       // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.orginalname) //+ '-' + uniqueSuffix)
    }
})

var upload = multer({ storage: storage })


app.post('/upload_image',upload.single(""),async (req,res)=>{
    try{
        console.log("Uploading file")
        await res.status(200).json("File uploaded successfully")
    }catch(err){
        console.log(err)
        await res.status(500).json('Failed to upload file')
    }
})
const PORT=8800
app.listen(PORT,err=>{
    if (err) throw err
    console.log("Server is running on ",PORT)
})