const express=require('express');
const mongoose=require('mongoose');
const userRoutes=require('../backend/Routes/UserRoutes')
const app=express();
const cookieParser=require('cookie-parser');
const cors=require('cors');
const blogRoutes=require('../backend/Routes/BlogRoutes')



app.use(cookieParser());


require('dotenv').config({
    path: 'C:/Users/Shubham/Desktop/blog/vite/config.env'
})//For enviornment variables

app.use(express.json());
const connectDb=async()=>
{
    try
    {
       const res=await mongoose.connect(process.env.MONGODB_URI,{
        useUnifiedTopology:true
       });

       console.log("MongoDB Connected")
    }
    catch(error)
    {
        console.log(error);
    }
}

app.use(cors({origin:"http://127.0.0.1:5173",credentials:true}));//For CORS


app.use('/',userRoutes);
app.use('/',blogRoutes);

connectDb().then(()=>
{
app.listen(3000,()=>
{
    console.log("Server started");
})
})
