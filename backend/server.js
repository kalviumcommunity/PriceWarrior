require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');


app.use(cors(
  {
    origin:["http://localhost:3000" , "https://pricewarrior.netlify.app"]
  }
));
app.use(express.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));


const Games = require("./models/gameModel");
const User = require("./models/userModal")

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
})
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`connection is successful with PORT ${process.env.PORT}, please proceed forward!`)
    })
})
.catch((err)=>{
    console.log(err);
})


const aggregateGameGet = [
  {$sort:{"name":1}},
  // {$sort:{"lastName":1}},
  { $project: {
    "isLatest":1,
    "isUpcoming":1,
    "name": 1,
    "lastName": 1,
    "homeImage":1,
    "homeGenre":1,

}},
]

const aggregateGameMainGet = [
  {$sort:{"name":1}},
  // {$sort:{"lastName":1}}
  { $project: {
    
    "name": 1,
    "lastName": 1,
    "homeImage":1,
    "homeGenre":1,
    "description":1,
    "rating":1,
    "detailImage":1,
    "currentMin":1
    
}},
]

app.get('/gameGet', async(req, res)=>{
    const games = await Games.aggregate(aggregateGameGet)
    res.status(200).send(games);
})

app.get('/gameMainGet', async(req, res)=>{
  const games = await Games.aggregate(aggregateGameMainGet)
  res.status(200).send(games);
})




app.get('/gameGet/:id', async (req, res)=>{
const {id} = req.params

if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such game!, Sorry!'})
  }

  const games = await Games.findById(id)

  if(!games){
    return res.status(404).json({error:'No such game!, Sorry!'})
  }

  res.status(200).json(games)
})

app.post('/gamePost', async(req, res)=>{
    const {name,description,relatedLinks,
         lastName,publisher,prices,tags,genres,
         releaseDate,developer,recommendedRequirements,
         rating,minimumRequirements,trailer,homeGenre,currentMax,currentAvg, currentMin, 
         editions, homeImage, detailImage, crouselImage, historyMax, historyAvg,historyMin,isLatest, isUpcoming}= req.body
    const modal = new Games()
    modal.name = name
    modal.lastName = lastName
    modal.editions = editions
    modal.homeGenre = homeGenre
    modal.homeImage= homeImage
    modal.detailImage= detailImage
    modal.crouselImage=crouselImage
    modal.currentMax=currentMax
    modal.currentAvg=currentAvg
    modal.currentMin=currentMin
    modal.historyMax=historyMax
    modal.historyAvg=historyAvg
    modal.historyMin=historyMin
    modal.rating=rating
    modal.trailer=trailer
    modal.description = description
    modal.relatedLinks=relatedLinks
    modal.minimumRequirements=minimumRequirements
    modal.recommendedRequirements=recommendedRequirements
    modal.developer=developer
    modal.publisher=publisher
    modal.releaseDate=releaseDate
    modal.genres=genres
    modal.tags=tags
    modal.prices=prices
    
    modal.isLatest = isLatest
    modal.isUpcoming = isUpcoming

    modal.save(async(err, data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send(modal)
        }
    })
    // try{
    //     const games = await Games.create({})
    //     res.status(200).json(games)
    // }
    // catch(error){
    //     res.status(400).json({error:error.message})
    // }
})

app.post('/login', async(req, res)=>{
  const {name,email, isAdmin}= req.body
  const UserModal = new User()
  UserModal.name = name
  UserModal.email = email
  UserModal.isAdmin = isAdmin
  
  UserModal.save(async(err, data)=>{
      if(err){
          console.log(err)
      }
      else{
          res.status(200).send(UserModal)
      }
  })
})

app.get('/userDetail', async(req, res)=>{
  const user = await User.find()
  res.status(200).send(user);
})




app.delete('/gameDelete/:id' ,async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such game!, Sorry!'})
    }
  
    const games = await Games.findOneAndDelete({_id: id})
  
    if(!games) {
      return res.status(400).json({error: 'No such game!, Sorry!'})
    }
  
    res.status(200).json(games)
  })

  app.put('/gamePut/:id', async(req, res)=>{
    const {id} = req.params
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such workout'})
      }
      const games = await Games.findOneAndUpdate({_id: id},{
        $set: req.body
      })
      

      if(!games) {
        return res.status(400).json({error: 'No such game!, Sorry!'})
      }

      res.status(200).json(games)

      
  })





