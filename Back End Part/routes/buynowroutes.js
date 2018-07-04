const express=require("express");
const router=express.Router();

router.post('/buyproduct',(req,res)=>{
    var userid=req.body.userid;
    var modelno=req.body.modelno;
    var orderid=req.body.orderid;
    var imageurl=req.body.imageurl;
    var productname=req.body.productname;
    var price=req.body.price;
    var buy_quantity=req.body.buy_quantity;
    var purchasing_date_time=req.body.purchasing_date_time;
    var delivery_time=req.body.delivery_time;
    var status=req.body.status;
    
    const buynowoperations=require("../db/buynowoperations");
    const buynowitems=require("../model/buynowitems");
    var productobject=new buynowitems(userid,modelno,orderid,imageurl,productname,price,buy_quantity,purchasing_date_time,delivery_time,status);
    buynowoperations.buynowfunc(productobject,res);
});

router.post('/myorders',(req,res)=>{
    var accountid=req.body.accountid;
    const buynowoperations=require("../db/buynowoperations");
    const accountuser=require("../model/accountuser");
    var object=new accountuser(accountid);
    buynowoperations.ordershistory(object,res);
})
module.exports=router;