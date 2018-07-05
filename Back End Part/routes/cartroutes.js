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

router.post('/fromcartdb',(req,res)=>{
    var accountid=req.body.accountid;   
    const cartoperations=require("../db/cartoperations");
    const accountuser=require("../model/accountuser");
    var userobject=new accountuser(accountid);
    cartoperations.fromdbcart(userobject,res);
});

router.post('/deletefromdb',(req,res)=>{
    var userid=req.body.userid;
    var modalno=req.body.modalno;
    var name=req.body.name;
    var price=req.body.price;
    var url=req.body.url;
    var buyquantity=req.body.buyquantity;
    
    const cartoperations=require("../db/cartoperations");
    const cartdata=require("../model/cartdata");
    var cartobj=new cartdata(userid,modalno,name,price,url,buyquantity);
    cartoperations.deleteitem(cartobj,res);
})

module.exports=router;