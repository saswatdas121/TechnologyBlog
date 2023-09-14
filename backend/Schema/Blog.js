const mongoose=require('mongoose');

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    userName:{
        type:String,
        required:true,  
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',  
    },
    categories:{
        type:Array,
        
    },
},{timestamps:true})

module.exports=mongoose.model("Blog",BlogSchema);