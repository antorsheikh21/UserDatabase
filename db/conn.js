


const mongoose=require('mongoose');
const conFig={useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true}

const Db=process.env.DATABASE

mongoose.connect(Db,conFig).then(()=>{
    console.log(`connection is succesfully done ~! 😄`);
}).catch((ee)=>{
    console.log(`conection is faild 😢 ${ee}`);
})
