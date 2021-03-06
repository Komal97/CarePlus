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
    previewitem(modalno,response){
        productcollection.find({modalno:modalno},function(err,result){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json(result);
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
    },
    
    retrievesanitizer(response){
        productcollection.find({type:"sanitizer"},function(err,result){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json(result);
            }
        });
    },

    retrievesanitary(response){
        productcollection.find({type:"pad"},function(err,result){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json(result);
            }
        });
    },

    retrievecondom(response){
        productcollection.find({type:"condom"},function(err,result){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json(result);
            }
        });
    },
}
module.exports=productoperations;