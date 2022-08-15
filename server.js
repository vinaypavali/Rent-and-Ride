const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const app = express();


dotenv.config({path:'./config.env'})

const DB= process.env.DATABASE;
const PORT = process.env.PORT 

mongoose.connect(DB,{
  useNewUrlParser:true,
  // useCreateIndex:true,
  useUnifiedTopology:true,
  // useFindAndModify:false
}).then(()=>console.log("MongoDB Connected..."))
.catch((err)=>console.log(`Not Connected-- ${err}`))

const middleware=(req,res,next)=>{
  console.log(`hello middleware`)
  next();
}

app.get('/',(req,res)=>{ 
  res.send("Pome Page")
})

app.get('/signup',(req,res)=>{
    res.send("Signup Page")
  })
  app.get('/login',(req,res)=>{
    res.send("Login Page")
  })
  app.get('/profile',middleware,(req,res)=>{
    res.send("Profile Page")
  })

  app.get('/travel',(req,res)=>{
    res.send("Post travel")
  })


app.listen(PORT,()=>console.log(`Server started...${PORT}`))