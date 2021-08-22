const express = require('express')
const helmet=require('helmet')
const bodyParser = require('body-parser')

var path = require('path');
require('dotenv').config()
const app=express()
const userRoute=require('./routes/user')
const authRoute=require('./routes/auth')
const db=require('./db/mongoose')
const questionRoute=require('./routes/question')
const examRoute=require('./routes/exam')
const checkQuestionAns=require('./routes/checkQuestionAns')
//static file
console.log(__dirname )
app.use(express.static('public' ))
app.use('/public', express.static(__dirname + '/public/'))
//
app.use(bodyParser.json())
app.use(helmet())
//all the route goes here
app.use('/',userRoute)
app.use('/api/user',authRoute)
app.use('/api/admin/question',questionRoute)
app.use('/api/admin/exam',examRoute)
app.use('/api/question',checkQuestionAns)


const PORT=8000
    app.listen(PORT,err=>{
    if (err) throw err
    console.log("Server is running on ",PORT)
})