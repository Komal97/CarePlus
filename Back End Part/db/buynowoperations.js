const buynowcollection=require("./buynowschema");

const buynowoperations={
    buynowfunc(productobject,response){
        buynowcollection.create(productobject,function(err,result){
            if(err){
                response.json({message:"error"});
            }
            else{
                response.json(result);
            }
        })
    },
    ordershistory(object,response){
        buynowcollection.find({userid:object.accountid},function(err,result){
            if(err){
                response.json({message:"err"});
            }
            else{
                response.json(result);
            }
        })
    }
}

module.exports=buynowoperations;