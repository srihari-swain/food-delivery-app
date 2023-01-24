const express=require("express")
const app=express();
const jwt=require("jsonwebtoken")
const cors=require("cors")
require('./DB/data')
require('./DB/db')
const mongoDb=require("./DB/data")
const foodrouter=require("./router/router")
const register=require("./router/router")
const login=require("./router/router")
const orderData=require("./router/router")
const myOrderData=require("./router/router")
app.use(cors())
app.use(express.json())
app.use('/api',foodrouter);
app.use("./api",register);
app.use("./api",login);
app.use("/api",orderData)
app.use("./api",myOrderData)

app.get('/verify/:token', (req, res)=>{
    const {token} = req.params;
  
    // Verifying the JWT token 
    jwt.verify(token, 'ourSecretKey', function(err, decoded) {
        if (err) {
            console.log(err);
            res.send("Email verification failed,possibly the link is invalid or expired");
        }
        else {
            res.send("Email verifified successfully");
        }
    });
});

app.listen(5000,()=>{
    console.log("connection succesfully...")
})