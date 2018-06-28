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
        productcollection.find({type:"new"},function(err,result){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json(result);
            }
        });
        //response.json(getdata);
    },
    retrievetop(response){
        productcollection.find({type:"top"},function(err,result){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json(result);
            }
        });
        //response.json(getdata);
    }
}
module.exports=productoperations;