const usercollection=require("./userschema");

const useroperations={
    register(userobject,response){
        usercollection.create(userobject,function(err){
            if(err){
                response.json({message:'Error Occured During registration'});
            }
            else{
                response.json({message:'Register successfully'});
            }
        })
    },

    login(userobject,response){
        usercollection.find({userid:userobject.userid,password:userobject.password},
        function(err,docs){
            if(err){
                response.json({message:'Error Occured During Login'});
            }
            else{
                if(docs && docs.length>0){
                    var object = {message:"Welcome "+UserObject.userid};
                    response.json(object);
                }
                else{
                    var object = {message:"Invalid Userid or Password "};
                    response.json(object);
                }
            }
        })
    }
}