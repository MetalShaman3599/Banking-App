import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routess from './routes/routingmethods.js';
import dotenv from 'dotenv';
dotenv.config();

const app=express();
app.use(express.json());
app.use(bodyparser.json({type:'application/json'}));
app.use(bodyparser.urlencoded({extended:true})); 
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  res.header('Access-Control-Allow-Methods', '*');
  next();
}
app.use(cors());

app.use(allowCrossDomain);
app.use('/',routess);

//Database connectivity
const Atlas_URL=process.env.DB_URL;
const PORT=process.env.PORT || 4000; 

mongoose.connect(Atlas_URL,{useNewUrlParser: true,dbName:"bankingsystem",useUnifiedTopology:true})
    .then(()=>app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error)=>console.log(error.message));

    
mongoose.set('useFindAndModify',false);
