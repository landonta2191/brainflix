//Bring express to our file
const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const {videoList, singleVideo} = require('./videoList');


// parse application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header ('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// GET endpoint at /videos that returns an array of videos
app.get('/videos', (req, res) => {
res.json(videoList);
})
// a GET endpoint for the path /videos/:id that returns an object with the details of the video whose id matches :id. This detailed response must include the array of comments for that video
app.get('/videos/:id', (req, res) => {
    let result=  singleVideo.find ((video) => {
        if (req.params.id == video.id) {
            //id is gonna be the placeholder namae 
            return true
        }
    })
    console.log(result)
 res.json(result);
})
// a POST endpoint for the path /videos/:id/comments. This should add a new comment to the video whose id matches :id
app.post('/videos/:id/comments', (req, res) => {
    console.log(req.body)
   let result= singleVideo.find (video => {
    if (req.params.id == video.id) {
        //id is gonna be the placeholder namae 
        return true;
    }})    
    console.log(result);
    result.comments.push(req.body);
    res.json(req.body)
//sending json object instead of a string
});
// DELETE
// app.delete('/videos/:videoId/comments/:commentId', (req,res) => {
//     console.log(req.body)
//     let result= singleVideo.find(video => {
//      if (req.params.id == video.id) {
//          //id is gonna be the placeholder namae 
//          return true;
//      }})
     
//     let deletecomment= result.comments.findIndex(comment => {
//         if ()
//     }

//     ) 
//      console.log(result);
        // result.comments.removeChild(req.body);
        // res.json("you deleted");
// });       



app.get('/underconstruction', (req, res)=> {
    res.status(404).send('OOOPS NOTHING HERE HONEY');
})
app.listen(8080,() => {
    console.log("server is running", 8080); 
});



