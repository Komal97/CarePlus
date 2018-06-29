app.controller("sanitarycontroller", function ($scope, sanitaryfactory) {
    var promise = sanitaryfactory.callServer();
    promise.then(function (data) {
        $scope.data = data;
    }, function (err) {
    });
});