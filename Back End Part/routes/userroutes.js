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
});

router.post('/login',(req,res)=>{
    var loginid=req.body.loginid;
    var loginpassword=req.body.loginpassword;
    
    const useroperations=require("../db/useroperations");
    const loginuser=require("../model/loginuser");
    var userobject=new loginuser(loginid,loginpassword);
    useroperations.login(userobject,res);
});

router.post('/account',(req,res)=>{
    var accountid=req.body.accountid;   
    const useroperations=require("../db/useroperations");
    const accountuser=require("../model/accountuser");
    var userobject=new accountuser(accountid);
    useroperations.editprofile(userobject,res);
});

router.post('/checkuser',(req,res)=>{
    var accountid=req.body.accountid;   
    const useroperations=require("../db/useroperations");
    const accountuser=require("../model/accountuser");
    var userobject=new accountuser(accountid);
    useroperations.checkuserexist(userobject,res);
});

router.post('/saveaccountinfo',(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var mobile=req.body.mobile;   
    var email=req.body.email;
    const useroperations=require("../db/useroperations");
    const edituser=require("../model/edituser");
    var userobject=new edituser(fname,lname,mobile,email);
    useroperations.save(userobject,res);
});

router.post('/confirmpassword',(req,res)=>{
    var userid=req.body.userid;
    var password=req.body.password;
    var newpass=req.body.newpass;
    const useroperations=require("../db/useroperations");
    const confirmpasswordclass=require("../model/confirmpassword"); 
    var confirmpasswordobj=new confirmpasswordclass(userid,password,newpass);
    useroperations.findconfirmpass(confirmpasswordobj,res);
});

router.post('/userforgotpassword',(req,res)=>{
    var accountid=req.body.accountid;   
    const useroperations=require("../db/useroperations");
    const accountuser=require("../model/accountuser");
    var userobject=new accountuser(accountid);
    useroperations.forgotpassword(userobject,res);
});
module.exports=router;