class buynowitems{
    constructor(userid,modelno,orderid,imageurl,productname,price,buy_quantity,purchasing_date_time,delivery_time,status){
        this.userid=userid;
        this.modelno=modelno;
        this.orderid=orderid;
        this.imageurl=imageurl;
        this.productname=productname;
        this.price=price;
        this.buy_quantity=buy_quantity;
        this.purchasing_date_time=purchasing_date_time;
        this.delivery_time=delivery_time;
        this.status=status;
    }
}

module.exports=buynowitems;