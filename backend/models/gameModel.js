const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gamesSchema = new Schema({
  name: {
    type: String,
    required: true
    
  },
  lastName:{
        type:String,
        required: true

  },

  homeGenre: {
    type: String,
    // required: true
  }, 

  homeImage: {
    type: String,
    required: true
  },
  detailImage:{
    type:String,
    // required: true
},

crouselImage:[
  {
    link:{
      type:String
    }
  }
]

,
  editions:[
    {
        editionName:{
            type:String
        }
    }
   
  ],

  currentMin:{
    type:String
  },
  currentAvg:{
    type:String
  },
  currentMax:{
    type:String
  },

  historyMin:{
    type:String
  },
  historyAvg:{
    type:String
  },
  historyMax:{
    type:String
  },

  rating:{
        type:Number,
        // required:true
  },
  trailer:{
    type:String,
    // required:true
  },

  description:{
    type:String,
    // required:true
  },

  relatedLinks:[
    {
        mssg:{
            type:String,
        },
        link:{
            type:String
        }
    }
  ],

  minimumRequirements:[
            
    {
        specs:{
            type:String
        },
        info:{
            type:String
        },
    },

  ],

  recommendedRequirements:[
            
    {
        specs:{
            type:String
        },
        info:{
            type:String
        },
    },

  ],

  developer:{
    type:String,
    // required:true
  },
  publisher:{
    type:String,
    // required:true
  },
  releaseDate:{
    type:String,
    // required:true
  },

  genres:[
    {
        genre:{
            type:String
        }
    }
],

tags:[
    {
        tag:{
            type:String
        }
    }

],
prices:[
    {
        name:{
            type:String
        },
        site:{
            type:String
        },
        
        price:{
            type:String
        }
    }
],

isLatest:{
  type:Boolean,
  required:true
},

isUpcoming:{
  type:Boolean,
  required:true
},

  
})

module.exports = mongoose.model('Games', gamesSchema)
