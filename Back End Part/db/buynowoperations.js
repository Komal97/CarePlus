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
    }
}

module.exports=buynowoperations;