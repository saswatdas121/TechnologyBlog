const jwt=require('jsonwebtoken');
const User=require('../backend/Schema/User')

const verifyToken=(req,res,next)=>
{
    const token=req.cookies.token;

    console.log(token);

    if(!token)
    {
        return res.status(401).json("Not Authenticatedsssss")
    }

    jwt.verify(token,process.env.SECRET,async(err,data)=>
    {
        if(err)
        {
           return res.status(401).json("Token is not valid");
        }

        const user=await User.findOne({_id:data.id}).select("-password");

        req.user=user;

        next()

    })
}

module.exports=verifyToken