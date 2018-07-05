const addresscollection=require("./addresschema");

const addressoperations={
    addr(addrobject,response){
        addresscollection.create(addrobject,function(err,result){
            if(err){
                response.json({message:'Error Occured During registration'});
            }
            else{
                response.json(result);
            }
        })
    }
}

module.exports=addressoperations;