const usercollection=require("./userschema");

const useroperations={
    register(userobject,req,response){
        usercollection.create(userobject,function(err){
            if(err){
                response.json({message:'Error Occured During registration'});
            }
            else{
                req.session.userid=userobject.userid;
                var object = {message:"Welcome "+req.session.userid};
                response.json(object);
            }
        })
    },

    login(userobject,req,response){
        usercollection.find({userid:userobject.loginid,password:userobject.loginpassword},
        function(err,docs){
            if(err){
                response.json({message:'Error Occured During Login'});
            }
            else{
                if(docs && docs.length>0){
                    req.session.userid=userobject.loginid;
                    var object = {message:"Welcome "+req.session.userid};
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
module.exports=useroperations;