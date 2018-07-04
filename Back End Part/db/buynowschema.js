const mongoose=require("./connection");
var schema=mongoose.Schema;
var buynowschema=new schema({userid:String,modelno:Number,orderid:Number,imageurl:String,productname:String,price:Number,
                           buy_quantity:Number,purchasing_date_time:String,delivery_time:String,status:String});
var buynowcollection=mongoose.model("orders",buynowschema);
module.exports=buynowcollection;

