const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.databaseConnectionUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true
    

}).then(
    console.log('connected')
).catch(err=>console.log(err))