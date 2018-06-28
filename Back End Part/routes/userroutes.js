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
    var loginid=req.body.loginid;
    var loginpassword=req.body.loginpassword;
    
    const useroperations=require("../db/useroperations");
    const loginuser=require("../model/loginuser");
    var userobject=new loginuser(loginid,loginpassword);
    useroperations.login(userobject,res);
})
module.exports=router;