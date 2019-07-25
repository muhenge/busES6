import express from 'express';
require('./model/db');
const port = process.env.PORT || 8080;

const app=express();

app.listen(port, ()=>{
    console.log( `server is running on port ${port}`)
})