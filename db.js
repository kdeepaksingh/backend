const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB',{
    useUnifiedTopology: true,
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
}, (err)=>{
    if(!err){
        console.log('Database Connection Successful')
    }else{
        console.log('Error in Connection' + err)
    }
})

module.exports = mongoose;