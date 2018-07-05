const addresscollection=require("./addresschema");

const addressoperations={
    addr(addrobject,response){
        addresscollection.create(addrobject,function(err,result){
            if(err){
                response.json({message:'Error occured while editing address'});
            }
            else{
                response.json(result);
            }
        })
    },
    findaddr(userobj,response){
        addresscollection.find({userid:userobj.accountid},function(err,result){
            if(err){
                response.json({message:'Error occured while retrieving address'});
            }
            else{
                response.json(result);
            }
        })
    }
}

module.exports=addressoperations;