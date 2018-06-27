const mongoose=require("./connection");
var schema=mongoose.Schema;
var userschema=new schema({firstname:String,lastname:String,userid:String,mobile:Number,password:String,delivery_address:String});

var usercollection=mongoose.model("users",userschema);
module.exports=usercollection;