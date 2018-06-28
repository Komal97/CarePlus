app.controller("retrievetopcontroller",function($scope,retrievetopfactory){
    console.log("controller");
    var promise = retrievetopfactory.callServer();
    promise.then(function(data){
        console.log("controller",data);
        $scope.data = data;
    },function(err){
        console.log("error",err);
    });
});