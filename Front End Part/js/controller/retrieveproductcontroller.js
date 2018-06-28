app.controller("retrievenewcontroller",function($scope,retrieveproductfactory){
    //console.log("controller");
    var promise = retrieveproductfactory.callServer();
    promise.then(function(data){
      //  console.log("controller",data);
        $scope.data = data;
    },function(err){
      //  console.log("error",err);
        //$scope.err = err;
        console.log("error",err);
    });
});