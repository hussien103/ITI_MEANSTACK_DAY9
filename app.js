var express = require('express');

var server = express();

var mongoose = require('mongoose');

const Movie = require('./models/movie');
mongoose.connect(`mongodb+srv://hosskhalifa:riNy2468cv+@cluster0.de76g.mongodb.net/ecommerce`,

).then(function(){
    console.log('Connected to the database');
}).catch(function(err){
    console.log('Error connecting');
});

server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.listen(3004,()=>{
    console.log("Server Connected")
})

server.post('/addmovie', (req,res)=>{
    var data = req.body;
    var newMovie = new Movie(data);
    try {
        newMovie.save().then(()=> {
            console.log("newMovie saved successfully")
         
        }).catch((err)=>{
            console.log("error");
            res.json({msg:"error saving movie"})
        })
    }catch(err) {
        console.log("Error saving newMovie",err)
    }
})

server.get('/getById/:id', (req, res) => {
    var movId=+req.params.id;
    try {
        Movie.findOne({id:movId}).then((movie)=>{
            if(movie){
                res.json({MovieData:movie})
            }else{
                res.json({message:"movie not found"})
            }
        })
        
        
    }catch (error) {
        console.error(error)
    }
})
server.get('/all',(req,res)=>{
    Movie.find({}).then((data)=>{
        if (data){
            res.json({MovieData:data})
            console.log(data)
        }else{
            res.json({message:"No Movies found"})
            console.log("error")
        }
    }).catch((error)=>{
        console.log(error)
    });
})

























