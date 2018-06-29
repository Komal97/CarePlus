app.controller("retreiveitemlistcontroller", function ($scope, retrieveitemlistfactory) {
    //console.log("itemlist controller");
    $scope.Send = function (type) {
       // console.log("type : ",type);
        var promise = retrieveitemlistfactory.callServer();
        promise.then(function (data) {
            //console.log("controller success : ", data);
            $scope.data = data;
        }, function (err) {
           // console.log("controller reject : ", err);
        });
    }
})