const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const User = require('./model/userSchema');
const Post = require('./model/postSchema')
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


// Register User
router.post('/register',async(req,res)=>{
  const {name,email,phone,password,cpassword}=req.body;
   let exist = await User.findOne({email})
      if(exist) {
          res.send({message:"user Exist"})
     }
     if(password !== cpassword){
      res.send({message:"Password doesn't match"})
     }else{
     const user = new User({
      name,email,phone,password,cpassword
       })
      await user.save(err=>{
          if (err) {
              res.send(err)
          } else {
              res.send({message:"Registered"})
          }
          
      })
     }
  
})

router.post('/register',async (req,res)=>{
  const {name,email,phone,password,cpassword}=req.body

 if(!name || !email || !phone || !password){
     return res.status(422).json({message:"Please Fill all Fields"});
 }

 try{

     const userExist = await User.findOne({email:email})
         if(userExist){
             return res.status(422).json({message:"Email already Exist"});
         }
         const user = new User({name,email,phone,password,cpassword});
          
         const userReg = await user.save();
         if(userReg){
             res.status(201).json({message:'User Registered'})
             res.json(userReg)
         }else{
             res.status(500).json({err})
         }

 }catch(err){
     res.status(500).json({err})
 }
})

 // Login User
router.post('/login',(req,res)=>{
  const {email,password}=req.body
  User.findOne({email:email},(err,user)=>{
      if (user) {
          if(password===user.password){
              res.send({message:"user login sucessfully ",user:user})
          }else{
              res.send({message:"incorrect password"})
          }
          
     }else{
      res.send({message:"user not registered"}) 
     }

  }
  )

})

 //Add Travel
  router.post('/post',async(req,res)=>{

    const {fromtime,totime,from,to,price,members,date}=req.body;
    const post = new Post({fromtime,totime,from,to,price,members,date})
    await post.save(err=>{
      if (err) {
          res.send(err)
      } else {
          res.send({message:"Travel Posted"})
      } 
  })
     
  })

  // Get All Travel Posts

  router.get("/allposts", async (req, res) => {
    try {
       const allposts = await Post.find();
       res.status(200).json(allposts);
      
    } catch (err) {
      
    }
  });



 
app.listen(PORT,()=>console.log(`Server started...`)) 