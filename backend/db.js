const mongoose= require ('mongoose');
mongoose.connect('mongodb://localhost:27017/meanDB', (err)=>{
    if(!err){
        console.log('DB connection Successful !!!')
    }else{
        console.log('Connection FAILED ?' +err)
    }
});

module.exports= mongoose;