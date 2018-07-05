const mongoose=require("./connection");
var schema=mongoose.Schema;
var addresschema=new schema({userid:String,name:String,address:String});

var addresscollection=mongoose.model("addresses",addresschema);
module.exports=addresscollection;