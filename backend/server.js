require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')


app.use(cors());
app.use(express.json());


const Games = require("./models/gameModel");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost/PriceWarrior",{
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


app.get('/gameGet', async(req, res)=>{
    const games = await Games.find().select("name lastName homeGenre homeImage isLatest isUpcoming")
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
         rating,minimumRequirements,trailer,homeGenre,current, 
         editions, homeImage, detailImage, crouselImage, history,isLatest, isUpcoming}= req.body
    const modal = new Games()
    modal.name = name
    modal.lastName = lastName
    modal.editions = editions
    modal.homeGenre = homeGenre
    modal.homeImage= homeImage
    modal.detailImage= detailImage
    modal.crouselImage=crouselImage
    modal.current=current
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
    modal.history = history
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


app.delete('/gamedelete/:id' ,async (req, res) => {
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

  app.patch('/gamepatch/:id', async(req, res)=>{
    const {id} = req.params
   
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such workout'})
      }

      const games = await Games.findOneAndUpdate({_id: id},{
        ...req.body
      })

      if(!games) {
        return res.status(400).json({error: 'No such game!, Sorry!'})
      }

      res.status(200).json(games)

      
  })





