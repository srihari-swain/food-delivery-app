const express=require("express");
const { MongoDecompressionError } = require("mongodb");
const nodemailer=require("nodemailer")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const jwtkey="swain"
const User=require("../models/user")
const {body,validationResult}=require("express-validator")
const router=express.Router();
const Order =require("../models/orderdata")
router.post('/fooditem',(req,res)=>
{
    try {
        res.send([global.item,global.category])
        
    } catch (error) {
        res.send(error)
        
    }

})
router.post("/register",[body('email').isEmail(),body('password').isLength({min:5}),body('name').isLength({min:3})],async(req,res)=>{
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }
    let salt= await bcrypt.genSalt(10);
    let hashpassword= await bcrypt.hash(req.body.password,salt);
    try {
         await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            location:req.body.location,
            
         }).then((user)=>{
           let data={
                user:{
                    id:user.id
                }
            }
            

            let token=jwt.sign(data,jwtkey)
            res.json(token)
         })
         .catch((err)=>{
            console.log(err)
            res.send("email is already exist",err)
         })
        
    } catch (error) {
        res.send(error)
    }

})
router.post("/login",[body('email').isEmail(),body('password').exists()],async(req,res)=>{
    let success=false;
   
    const errors=validationResult(req);
    if(!errors.isEmpty()){
         return res.status(400).json({errors:errors.array()})
    }

    try {
        let{email,password}=req.body;

    let data=await User.findOne({email})
   
    if(!data){
        res.send("email does not exist");
    }
    let userpassword=await bcrypt.compare(password,data.password);
    if(!userpassword){
        res.send("incorrect password")

    }
    const user={
        data:{
            id:data.id
        }
    }
    const token=jwt.sign(user,jwtkey);
    console.log(token)
   
    res.json({"token":token})

        
    } catch (error) {
        console.log(error);
        res.send("server error")
        
    }
    

})
router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})
/*router.post('/myOrderData', async (req, res) => {
    try {
        console.log(req.body.email)
        let eId = await Order.findOne({ 'email': req.body.email })
        //console.log(eId)
        res.json({orderData:eId})
    } catch (error) {
        res.send("Error",error.message)
    }


});*/


module.exports=router