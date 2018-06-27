const mongoose=require("./connection");
var schema=mongoose.Schema;
var productschema=new schema({modalno:String,name:String,price:Number,url:String,description:String,quantity:Number,status:String,outofstock:String,type:String});
var productcollection=mongoose.model("products",productschema);
module.exports=productcollection;