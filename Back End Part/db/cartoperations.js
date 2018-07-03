const cartcollection=require("./cartschema");
 const cartoperations={
     tocartdatabase(cartobject,response){
        cartcollection.create(cartobject,function(err){
            if(err){
                response.json({message:'Error'});
            }
            else{
                response.json({message:'success'});
            }
        });
    }
 }


module.exports=cartoperations;