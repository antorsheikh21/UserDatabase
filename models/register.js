const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
            name:{
                type:String,
                require:true,
                trim:true,
            },
            email:{
                type:String,
                require:true,
                unique:[true,"The email is already exits"],
                trim:true,
    
            },
            phone:{
                type:Number,
                trim:true,
                required:true
             },
             work:{
                 type:String,
                 required:true
             },
            password:{
                type:String,
                require:true,
                trim:true,
                minlenth:4

            },
            cpassword:{
                type:String,
                require:true,
                trim:true,
                minlenth:4
            },
            date:{
                type:Date,
                default:Date.now
            },

            messages:[
                {
                    name:{type:'String'},
                    email:{type:'String'},
                    phone:{type:Number},
                    message:{type:"String"}
                }

            ],

            
        
            tokens:[
                {
                    token:{
                    type:String,
                    required:true
                    }
                }
            ]

          })

        
          
          userSchema.methods.userAuthentication=async function(){
            try {
               const token= jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)

               this.tokens=this.tokens.concat({token})
               await this.save()
               return token

            } catch (error) {
                console.log(error)
            }
          }

           
  

          userSchema.pre("save",async function(next){

            try {
                if(this.isModified("password")){

                    
                    this.password= await bcrypt.hash(this.password,10);
                    this.cpassword= this.password

                     
                }
                next()
            } catch (error) {
             console.log(error)

            }
          })


          userSchema.methods.addMessage=async function(name,email,phone,message){
              try {
                  this.messages=this.messages.concat({name,email,phone,message});
                  await this.save()
                  return this.messages
              } catch (error) {
                  console.log('addMessge errr')
              }
          }


        


 

        const User =new  mongoose.model("USER",userSchema)



    module.exports=User