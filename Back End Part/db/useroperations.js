const usercollection=require("./userschema");

const useroperations={
    register(userobject,response){
        usercollection.create(userobject,function(err){
            if(err){
                response.json({message:'Error Occured During registration'});
            }
            else{
                var object = {message:userobject.userid};
                response.json(object);
            }
        })
    },

    login(userobject,response){
        usercollection.find({userid:userobject.loginid,password:userobject.loginpassword},
        function(err,docs){
            if(err){
                response.json({message:'Error Occured During Login'});
            }
            else{
                if(docs && docs.length>0){
                    var object = {message:userobject.loginid};
                    response.json(object);
                }
                else{
                    var object = {message:"Invalid Userid or Password "};
                    response.json(object);
                }
            }
        })
    },
    editprofile(userobject,response){
        usercollection.find({userid:userobject.accountid},
            function(err,docs){
                if(err){
                    response.json({message:'Error'});
                }
                else{
                    response.json(docs);
                }
        })
    },
    save(userobject,response){
        console.log("Email is ",userobject.email);
        console.log("User Object Save ",userobject);
        
        usercollection.updateOne({userid:userobject.email},
            {$set :
                {firstname:userobject.fname,lastname:userobject.lname,
                 mobile:userobject.mobile
                }
            },
            function(err,result){
            if(err){
                response.json({message:'Error during update'});
            }
            else{
                response.json(result);
            }
        })
    }
}
module.exports=useroperations;