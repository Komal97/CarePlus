const dbConfig=require("./config");
const  mongoose=require("mongoose");
mongoose.connect(dbConfig.url);              
module.exports=mongoose;