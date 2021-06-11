
const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs')

  
const authenticate=require("../middleware/authenticate")

require('../db/conn')
const User=require('../models/register')

 

router.post("/register", async(req,res)=>{

    try {

        const {name,email,phone,work,password,cpassword}=req.body
        if(!name || !email || !phone  || !work   || !password   || !cpassword   ){
               
           res.status(422).json({error:"Please filled the field poperty"})
    
        
           
        }
        const userExit= await User.findOne({email});

        if(userExit){
             return res.status(422).json({error:"Email already Exits"});
        }else if(password!==cpassword){
            return res.status(422).json({error:"password are not matching"})
        }else{
            const user= new User({name,email, phone,work, password,cpassword});
            await user.save();
            res.status(201).json({message:"user registered succesfully"})
        }
        
    
       
    } catch (error) {
        console.log(error);
    }
})



//userSingIn
 router.post('/signin',async(req,res)=>{
     try {
        
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"Please fill the input box "})
        }
        const userLogin= await User.findOne({email})




          if(userLogin){
            const isMatch= await bcrypt.compare(password,userLogin.password)
            

             if(!isMatch){
                 res.status(400).json({error:"Invalid Credientials "})
             }else{ 
                 
                 const token=  await userLogin.userAuthentication();
                 res.cookie('jwtToken',token,{expires:new Date(Date.now +600000),httpOnly:true})
                 res.json({message:"user singin successfully "})
             }


         }else{
             res.status(400).json({error:"Invalid Credientials"})
         } 
       
    
         

     } catch (error) {
      console.log(error)
            res.status(400).json({error})
     }
 })







//  ABOUT PAGE AUTHENTICATION 

router.get('/about',authenticate,(req,res)=>{
    console.log(`Hello my about `)
    res.status(200).send(req.rootUser)
})

router.get("/getdata",authenticate,(req,res)=>{
    res.status(200).json(req.rootUser)
  })

// adition data from user ..frm the contact page 





router.post('/contact',authenticate,async(req,res)=>{
    try {
         const {name,email,phone,message}=req.body;

         if(!name  || !email  || !phone  || !message){
            
            return    res.status(400).json({error:"Please Fill All Data"});
         } 

         const userContact=await  User.findOne({_id:req.userId})

         if(userContact){
             await userContact.addMessage(name,email,phone,message);

            await userContact.save()
           res.status(201).json({"message":"Data send succesfully done! 😄"})
         }



    } catch (error) {
        console.log(error)
    }
})

 
router.get('/logout',(req,res)=>{
    console.log('hello my logout page');
    res.clearCookie('jwtToken',{path:'/'})
    res.status(200).send("User Logout")
})


module.exports=router