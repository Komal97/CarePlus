class product{
    constructor(modalno,name,price,url,description,quantity,status,outofstock,type){
        this.modalno=modalno;
        this.name=name;
        this.price=price;
        this.url=url;
        this.description=description;
        this.quantity=quantity;
        this.status=status;
        this.outofstock=outofstock;
        this.type=type;
    }
}
module.exports=product;