//---------------- REQUIRING MODULES-------------------
const express=require("express");
const bodyparser=require("body-parser");
const userRoute=require("./routes/userroutes");

const app=express();

app.use(bodyparser.urlencoded({encoding:true}));
app.use(bodyparser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();  
})

app.use('/',userRoute);

//------------------- SERVER START --------------------
app.listen(1234,()=>{
    console.log("server start...");
})