const express=require('express');
const User=require('../Schema/User')
const app=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

app.post('/register',async(req,res)=>
{
   const {firstName,lastName,email,password}=req.body;
 
   const response=await User.findOne({email:email});

   if(response)
   {
     console.log("user Already there");
     return;
   }

   const hashedPassword=await bcrypt.hash(password,12);

   const newUser=await User.create({
    firstName,lastName,email,
    password:hashedPassword

   })

   console.log("User registered successfully")


   res.status(200).json(newUser);


})

app.post('/login',async(req,res)=>
{
   const {email,password}=req.body;
 
   const user=await User.findOne({email:email});

   if(!user)
   {
     console.log("user not exist");
     return;
   }
  
   const checkPassword=await bcrypt.compare(password,user.password);

   if(!checkPassword)
   {
     console.log("user password incorrect");
     return;
   }

   const token=jwt.sign({id:user._id},process.env.SECRET,{expiresIn:"3d"});

   res.cookie("token",token).status(200).json(user);
})

app.get("/logout",(req,res)=>
{
  try
  {
    res.clearCookie("token",{sameSite:"none",secure:"true"}).status(200).send("User Logged out");
  }
  catch(error)
  {
     res.status(500).json(error);
  }
})

app.get("/refetch",(req,res)=>
{
    const token=req.cookies.token;

    console.log(token);
    

    jwt.verify(token,process.env.SECRET,async(err,data)=>
    {
        if(err)
        {
          return res.status(400).json(err+"ssss");
        }

        const user=await User.findOne({_id:data.id});


        console.log(user);

        return res.status(200).json(user);
         
    })
})

module.exports=app;