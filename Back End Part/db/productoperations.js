const productcollection=require("./productschema");

const productoperations={
   addproduct(productobject,response){
        productcollection.create(productobject,function(err){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json({message:'success'});
            }
        });
    },
    retrieve(response){
        productcollection.find({},function(err,result){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json(result);
            }
        });
    },
    retrieveitemlist(type,response){
        productcollection.find({type:type},function(err,result){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json(result);
            }
        })
    }
}
module.exports=productoperations;