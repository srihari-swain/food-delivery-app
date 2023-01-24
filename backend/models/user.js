const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{ type: String, require: true},
    password:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},

date:{
    type:Date,
    default:Date.now

}


})
  const User= mongoose.model("User",userSchema);
  module.exports=User