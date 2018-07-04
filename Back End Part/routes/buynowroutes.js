const express=require("express");
const router=express.Router();

router.post('/buyproduct',(req,res)=>{
    var userid=req.body.userid;
    var modelno=req.body.modelno;
    var imageurl=req.body.imageurl;
    var productname=req.body.productname;
    var price=req.body.price;
    var buy_quantity=req.body.buy_quantity;
    var purchasing_date_time=req.body.purchasing_date_time;
    var delivery_time=req.body.delivery_time;
    var status=req.body.status;
    
    const buynowoperations=require("../db/buynowoperations");
    const buynowitems=require("../model/buynowitems");
    var productobject=new buynowitems(userid,modelno,imageurl,productname,price,buy_quantity,purchasing_date_time,delivery_time,status);
    buynowoperations.buynowfunc(productobject,res);
});
module.exports=router;