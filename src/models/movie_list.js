const mongoose = require('mongoose')
const validators = require('validator')
const movieListSchema = new mongoose.Schema({
    backdrop:{
        type:String
    },
    cast:{
        type:[String]
    },
    classification:{
        type:String
    },
    director:{
        type:String
    },
    genres:{
        type:[String]
    },
    imdb_rating:{
       type:String 
    },
    length:{
        type:String
    },
    overview:{
        type:String
    },
    poster:{
        type:String
    },
    released_on:{
        type:Date
    },
    slug:{
        type:String
    },
    title:{
        type:String
    }
})

const movieList = mongoose.model('movie_list',movieListSchema)
module.exports = movieList
