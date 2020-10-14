const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// my express object
const app = express()

// middleware
app.use(cors())
app.use(express.json())

// routers
const todoRoute = require('./routers/todo')
app.use('/todo', todoRoute)

// connect mongoose to db
const db = process.env.MY_DB_INFO
mongoose.connect(db, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true}, ()=>{
  console.log('connected to db')
} )

// app listen to the server
app.listen(5000)