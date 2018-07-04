const mongoose=require("./connection");
var schema=mongoose.Schema;
var cartschema=new schema({userid:String,modalno:String,name:String,price:Number,url:String,buyquantity:Number});
var cartcollection=mongoose.model("cart",cartschema);
module.exports=cartcollection;