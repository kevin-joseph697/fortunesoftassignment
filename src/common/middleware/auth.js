const jwt = require('jsonwebtoken')

const auth = async(req,res,next)=>{
    try{   
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded  = jwt.verify(token,process.env.secret)
        console.log(decoded)
        if(decoded.token != 'FSMovies2021'){
            throw new Error()
        }
        next()

    }catch(err){
        res.status(401).send({error:'Plese Authenticate'})
    }
}

module.exports = auth