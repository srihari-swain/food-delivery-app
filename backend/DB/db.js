const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/food_delivery_app")
.then(()=>{
    console.log("database connected...")
})
.catch(err=>{
    console.log(err)
})
