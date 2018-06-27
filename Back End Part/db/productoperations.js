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
        })
    }
}
module.exports=productoperations;