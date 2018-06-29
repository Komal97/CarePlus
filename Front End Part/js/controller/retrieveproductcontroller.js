app.controller("retrievenewcontroller", function ($scope, retrieveproductfactory) {
  var promise = retrieveproductfactory.callServer();
  promise.then(function (data) {
    $scope.data = data;
  }, function (err) {
    console.log("error", err);
  });
});