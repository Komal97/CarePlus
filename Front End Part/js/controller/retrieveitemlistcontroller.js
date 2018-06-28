app.controller("retreiveitemlistcontroller", function ($scope, retrieveitemlistfactory) {
    console.log("itemlist controller");
    $scope.Sendtype = function (type) {
       console.log("type : ",type);

        var promise = retrieveitemlistfactory.callServer(type);
        promise.then(function (data) {
            console.log("itemlist controller", data);
            //$scope.data = data;
        }, function (err) {
            console.log("error", err);
            //$scope.err = err;
        })
    }
})