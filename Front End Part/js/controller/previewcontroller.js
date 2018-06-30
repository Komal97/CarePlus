app.controller("previewcontroller",function($scope,myfactory){
    $scope.showdata=function($event,items){
       // console.log("controller");
        var promise=myfactory.showdata($event,items);
        promise.then(function(data){
            console.log("data",data.data[0].name);
          //  $scope.data=data;
       // $scope.image=data.url;
        //$scope.nameofitem="abc";
        console.log($scope.nameofitem);
        },function(err){
           $scope.login=err;
        });
    }
});