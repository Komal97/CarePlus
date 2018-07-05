const express=require("express");
const router=express.Router();

router.post("/manageaddress",(req,res)=>{
    var userid=req.body.userid;
    var name=req.body.name;
    var address=req.body.address;
       
    const addressoperations=require("../db/addressoperations");
    const useraddress=require("../model/useraddress");
    var addrobject=new useraddress(userid,name,address);
    addressoperations.addr(addrobject,res);
})

router.post("/fromaddress",(req,res)=>{
    var userid=req.body.accountid;
    const addressoperations=require("../db/addressoperations");
    const accountuser=require("../model/accountuser");
    var userobject=new accountuser(userid);
    addressoperations.findaddr(userobject,res);
})
module.exports=router;