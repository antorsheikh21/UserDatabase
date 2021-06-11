const jwt=require('jsonwebtoken');
const User=require("../models/register")

 const Authenticate= async(req,res,next)=>{
     
    try {
        const token=req.cookies.jwtToken;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY)

        const rootUser=await User.findOne({_id:verifyToken._id,'tokens.token':token})
        if(!rootUser){throw new Error('User not Found !')}
        req.token=token;
        req.rootUser=rootUser;
        req.userId=rootUser._id;
        next()
     } catch (error) {
         res.status(401).send('Unothorized:NO token provided')
         console.log(error)
         
     }

 }




 

 module.exports=Authenticate