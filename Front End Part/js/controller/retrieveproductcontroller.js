app.controller("retrieveproductcontroller", function ($scope, retrieveproductfactory) {
  $scope.showdata=function($event,items){
    console.log("controller");
   
     var promise=retrieveproductfactory.showdata($event,items);
     promise.then(function(data){
         console.log("data",data.data[0].name);
       //  $scope.data=data;
    // $scope.image=data.url;
    $scope.nameofitem=data.data[0].name;
   console.log( $scope.nameofitem);
     },function(err){
        console.log("error",err);
       
     });
 };

  var promise = retrieveproductfactory.callServer();
  promise.then(function (data) {
    $scope.data = data;
  }, function (err) {
    console.log("error", err);
  });
});