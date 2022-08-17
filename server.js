const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

const Profile = require('./model/profileSchema');
const User = require('./model/userSchema');

const app = express();
const router = express.Router()
app.use(express.json())

app.use(router)


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
  res.send("Home Page")
})

router.get('/signup',(req,res)=>{
    res.send("Signup Page")

  })

  router.post('/signup',async(req,res)=>{
 
    const {name,email,phone,password,cpassword}=req.body;
    const user = new User({name,email,phone,password,cpassword})
    await user.save(err=>{
      if (err) {
          res.send(err)
      } else {
          res.send({message:"Registered"})
      }
      
  })
     

  })
 


  app.get('/login',(req,res)=>{
    res.send("Login Page")
  })

  router.get('/profile',(req,res)=>{
    
     
  })

  router.post('/profile',async(req,res)=>{
 
    const {name,email,phone,password,cpassword}=req.body;
    const profile = new Profile({name,email,phone,password,cpassword})
    await profile.save(err=>{
      if (err) {
          res.send(err)
      } else {
          res.send({message:"Profile"})
      }
      
  })
     
  })

  app.get('/travel',(req,res)=>{
    res.send("Post travel")
  })


app.listen(PORT,()=>console.log(`Server started...${PORT}`)) 