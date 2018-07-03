const express=require("express");
const router=express.Router();

router.post('/tocartdb',(req,res)=>{
    var userid=req.body.userid;
    var modalno=req.body.modalno;
    var name=req.body.name;
    var price=req.body.price;
    var url=req.body.url;
    var buyquantity=req.body.buyquantity;
    
    const cartoperations=require("../db/cartoperations");
    const cartdata=require("../model/cartdata");
    var cartobject=new cartdata(userid,modalno,name,price,url,buyquantity);
    cartoperations.tocartdatabase(cartobject,res);
});


module.exports=router;