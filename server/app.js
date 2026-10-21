const express = require('express')
//console.log(express)
const app = express()
const PORT = 3000
const web = require('./routes/web')
const AuthController = require('./controllers/AuthController')
const dotenv =require('dotenv')

// data get json
app.use(express.json())
dotenv.config()






























//localhost:3000/api
app.use('/api', web)  


//server create
app.listen(process.env.PORT,() =>{
console.log("server start LocalHost:4000")
} )