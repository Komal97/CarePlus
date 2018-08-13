//---------------- REQUIRING MODULES-------------------
const express=require("express");
const bodyparser=require("body-parser");
const session=require("express-session");
const userRoute=require("./routes/userroutes");
const productRoute=require("./routes/productroutes");
const buynowRoute=require("./routes/buynowroutes");
const cartroute=require("./routes/cartroutes");
const addressRoute=require("./routes/addressroutes");

const app=express();

app.use(bodyparser.urlencoded({encoding:true}));
app.use(bodyparser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();  
})

app.use('/',userRoute);
app.use('/',productRoute);
app.use('/',buynowRoute);
app.use('/',cartroute);
app.use('/',addressRoute)
//------------------- SERVER START --------------------
app.listen(1234,()=>{
    console.log("server start...");
})