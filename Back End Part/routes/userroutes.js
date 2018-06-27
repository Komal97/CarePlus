const express=require("express");
const router=express.Router();

router.post('/register',(req,res)=>{
    var firstname=req.body.firstname;
    var lastname=req.body.lastname;
    var userid=req.body.userid;
    var mobile=req.body.mobile;
    var password=req.body.password;
    
    const useroperations=require("../db/useroperations");
    const user=require("../model/user");
    var userobject=new user(firstname,lastname,userid,mobile,password);
    useroperations.register(userobject,res);
})

router.post('/login',(req,res)=>{
    var firstname=req.body.firstname;
    var lastname=req.body.lastname;
    var userid=req.body.userid;
    var mobile=req.body.mobile;
    var password=req.body.password;
    
    const useroperations=require("../db/useroperations");
    const user=require("../model/user");
    var userobject=new user(firstname,lastname,userid,mobile,password);
    useroperations.login(userobject,res);
})
module.exports=router;