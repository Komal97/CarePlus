app.controller("retrieveitemlistcontroller", function ($scope, retrieveproductfactory) {
    console.log("controller");
    $scope.Sendtype(type) = function (type) {
        var promise = retrieveproductfactory.callServer(type);
        promise.then(function (data) {
            console.log("controller", data);
            //$scope.data = data;
        }, function (err) {
            console.log("error", err);
            //$scope.err = err;
        })
    }
})