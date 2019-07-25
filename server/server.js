import express from 'express';
import bodyParser from 'body-parser';
import {} from "./model/db";

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.listen(port, ()=>{
    console.log( `server is running on port ${port}`)
})