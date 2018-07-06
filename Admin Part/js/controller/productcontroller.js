app.controller("myctrl",function($scope,myfactory){

    $scope.updateprice=function(){
        $scope.showprice=$scope.price;
    }
    $scope.addproduct=function(){
        console.log("controller");
        var productobject1=new product($scope.modalno,$scope.name,$scope.price,$scope.url,$scope.description,$scope.quantity,$scope.status,$scope.outofstock,$scope.type);
        var promise=myfactory.addproduct(productobject1);
        promise.then(function(data){
           console.log("Back to promise...",data);
           alert("product added...");
        },function(err){
           //console.log(err);
        })
    }
})