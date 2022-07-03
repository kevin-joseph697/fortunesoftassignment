const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const auth = require('../common/middleware/auth')
const router = express.Router()
const movieListSchema = require('../models/movie_list')


// endpoint to generate webtoken based on
router.post('/generatewebtoken',async(req,res)=>{
    try{    
        const value = req.body.value // value should be FSMovies2021 or else middleware will throw an  error
        const token = jwt.sign({token:value},process.env.secret)
        console.log(token)
        return res.status(200).send({
            token
        })
    }catch(err){
        return res.status(500).send({
            error:'Bad Request'
        })
    }
})

router.get('/getmovielists',auth,async(req,res)=>{
    let actionMovies = [{
        "genres":"Action",
        "movies":[]
    }]
    let cirmeMovies = [{
        "genres":"Crime",
        "movies":[]
    }]
    let AnimationMovies = [{
        "genres":"Animation",
        "movies":[]
    }]
    let AdventureMovies = [{
        "genres":"Adventure",
        "movies":[]
    }]
    let FamilyMovies = [{
        "genres":"Family",
        "movies":[]
    }]
    let ThrillerMovies = [{
        "genres":"Thriller",
        "movies":[]
    }]
    let BiographyMovies = [{
        "genres":"Biography",
        "movies":[]
    }]
    let HistoryMovies = [{
        "genres":"History",
        "movies":[]
    }]
    let MysteryMovies = [{
        "genres":"Mystery",
        "movies":[]
    }]

    try{
        const movieList = await movieListSchema.find({})
        // console.log(movieList)
        let data = {}
        for(let i=0;i<movieList.length;i++){
            for(let  j=0;j<movieList[i].genres.length;j++){
                if(movieList[i].genres[j] == 'Action'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    actionMovies[0]['movies'].push(data)
                }
                if(movieList[i].genres[j] == 'Crime'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    cirmeMovies[0]['movies'].push(data)
                }
                if(movieList[i].genres[j] == 'Animation'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    AnimationMovies[0]['movies'].push(data)
                }
                if(movieList[i].genres[j] == 'Adventure'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    AdventureMovies[0]['movies'].push(data)
                }
                if(movieList[i].genres[j] == 'Family'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    FamilyMovies[0]['movies'].push(data)
                }
                if(movieList[i].genres[j] == 'Thriller'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    ThrillerMovies[0]['movies'].push(data)
                }
                if(movieList[i].genres[j] == 'Biography'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    BiographyMovies[0]['movies'].push(data)
                }
                if(movieList[i].genres[j] == 'History'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    HistoryMovies[0]['movies'].push(data)
                }

                if(movieList[i].genres[j] == 'Mystery'){
                    data={
                        "director": movieList[i].director,
                        "imdb_rating":movieList[i].imdb_rating,
                        "length": movieList[i].imdb_rating,
                        "poster": movieList[i].poster,
                        "title": movieList[i].title
                    }
                    MysteryMovies[0]['movies'].push(data)
                }
                // console.log(movieList[i].genres[j])
            }
            console.log(movieList[i].genres)
        }
        let movieData = {
            actionMovies,
            cirmeMovies,
            AnimationMovies,
            AdventureMovies,
            FamilyMovies,
            ThrillerMovies,
            BiographyMovies,
            HistoryMovies,
            MysteryMovies,
        }
        res.send(movieData)
    }catch(err){
        return  res.status(500).send({
            message:'Bad Request',
            error:err
        })
    }
})

module.exports = router