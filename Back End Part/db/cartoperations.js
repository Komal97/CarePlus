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
    },

    fromdbcart(userobject,response){
        cartcollection.find({userid:userobject.accountid},
            function(err,docs){
                if(err){
                    response.json({message:'Error'});
                }
                else{
                    response.json(docs);
                }
        })
    },

    deleteitem(userobject,response){
        cartcollection.deleteOne({modalno:userobject.modalno},
            function(err,docs){
                if(err){
                    response.json({message:'Error'});
                }
                else{
                    response.json(docs);
                }
        })
    }
 }


module.exports=cartoperations;