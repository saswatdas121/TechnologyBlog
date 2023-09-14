const express=require('express');
const Blog=require('../Schema/Blog')
const verifyToken=require('../jwtverify');

const app=express.Router();

app.post("/create",verifyToken,async (req,res)=>
{
    try
    {
        const {title,desc,userName,userId,category}=req.body;

        const newBlog=await Blog.create({
           title,desc,userName,userId,
           categories:category
        });

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

module.exports=app;