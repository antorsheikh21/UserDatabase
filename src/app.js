let dotEnv=require('dotenv');

dotEnv.config({path:'../config.env'})
 
const express=require('express');
const cookieParser = require('cookie-parser')
const app=express();
const PORT=process.env.PORT || 5000;
const router=require('../Router/rout')
  

 //databse
 app.use(cookieParser())
app.use(express.json())
app.use(router)

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/buid"));
}

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})




