const mongoose=require('mongoose')

let UserSchema=new mongoose.Schema({
    name:{type:string,required:true},
    email:{type:string,required:true},
    password:{type:String,required:true},
    create:{type:Data,default:Date.now}
})

let User=mongoose.model("user",UserSchema)
module.exports=User