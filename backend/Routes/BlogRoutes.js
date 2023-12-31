const express=require('express');
const Blog=require('../Schema/Blog')
const verifyToken=require('../jwtverify');
const multer=require('multer');

const app=express.Router();

app.post("/create",verifyToken,async (req,res)=>
{
    try
    { 
        
        const {title,desc,userName,userId,category,photo}=req.body;

        console.log(req.body);

        const newBlog=await Blog.create({
           title,desc,userName,userId,photo,
           categories:category
        });


        console.log(newBlog+"sss");
        const populatedBlog=await Blog.findOne({_id:newBlog._id}).populate("userId");

        return res.status(200).json(populatedBlog);
    }
    catch(error)
    {
        res.status(200).json(error)
    }
})

app.get('/allposts',async (req,res)=>
{
    try
    {
       const blogs=await Blog.find({}).limit(5).populate("userId");

       return res.status(200).json(blogs);
    }
    catch(error)
    {
        console.log(error)
    }

});

app.get('/profile/:id',async(req,res)=>
{
    const id=req.params.id;

    const blogs=await Blog.find({userId:id}).populate("userId");

    return res.status(200).json(blogs);
});

app.get('/blogs/:id',async(req,res)=>
{
    const id=req.params.id;

    const blogs=await Blog.find({_id:id}).populate("userId");

    console.log(blogs);

    return res.status(200).json(blogs);
})

app.get('/blogs',async(req,res)=>
{
    const id=req.params.id;

    const blogs=await Blog.find({}).populate("userId")

    return res.status(200).json(blogs);
})

app.put('/update/:id',async(req,res)=>
{
    const id=req.params.id;

    const blogs=await Blog.findByIdAndUpdate(id,{$set:req.body},{new:true}).populate("userId");

    console.log(blogs);

    return res.status(200).json(blogs);
})

app.delete('/delete/:id',async(req,res)=>
{
    const id=req.params.id;

    const blogs=await Blog.findByIdAndDelete(id);

    return res.status(200).json("The post has been deleted");
})

module.exports=app;