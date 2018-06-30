app.controller("retrievetopcontroller", function ($scope, retrievetopfactory) {
        console.log("top controller");
        var promise = retrievetopfactory.callServer();
        promise.then(function (data) {
            //console.log("top controller", data);
            $scope.data = data;
        }, function (err) {
            console.log("error", err);
        });
});