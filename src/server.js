const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/db')

const movieList = require('./routes/movielist')
const app = express()
const port = process.env.port
app.use(cors())
app.use(express.json())
app.use(movieList)

app.listen(port,()=>{
    console.log(`server is runing at port ${port}`)
})