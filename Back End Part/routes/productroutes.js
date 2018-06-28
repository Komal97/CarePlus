const express=require("express");
const router=express.Router();

router.post('/add',(req,res)=>{
    var modalno=req.body.modalno;
    var name=req.body.name;
    var price=req.body.price;
    var url=req.body.url;
    var description=req.body.description;
    var quantity=req.body.quantity;
    var status=req.body.status;
    var outofstock=req.body.outofstock;
    var type=req.body.type;
    
    const productoperations=require("../db/productoperations");
    const product=require("../model/product");
    var productobject=new product(modalno,name,price,url,description,quantity,status,outofstock,type);
    productoperations.addproduct(productobject,res);
});

router.get('/retrieveproduct',(req,res)=>{
    const productoperations=require("../db/productoperations");
    productoperations.retrieve(res);
});

router.get('/topproduct',(req,res)=>{
    const productoperations=require("../db/productoperations");
    productoperations.retrievetop(res);
})

router.get('/itemlistproduct',(req,res)=>{
    var type=req.body.type;
    const productoperations=require("../db/productoperations");
    productoperations.retrieveitemlist(type,res);
})

module.exports=router;