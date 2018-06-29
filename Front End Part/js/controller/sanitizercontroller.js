app.controller("sanitizercontroller", function ($scope, sanitizerfactory) {
    var promise = sanitizerfactory.callServer();
    promise.then(function (data) {
        $scope.data = data;
    }, function (err) {
    });
});