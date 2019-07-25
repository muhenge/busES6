import mongoose from 'mongoose'


     mongoose.connect('mongodb://localhost:27017/busNectES6DB',(err)=>{
     if(!err){
         console.log(`Successfully connected to the database`);
     }else{console.log(`Error in DB connection ${err} `)}
 })