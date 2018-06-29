app.controller("concontroller", function ($scope, confactory) {
    console.log("con controller");
    var promise = confactory.callServer();
    promise.then(function (data) {
        $scope.data = data;
    }, function (err) {
    });
});