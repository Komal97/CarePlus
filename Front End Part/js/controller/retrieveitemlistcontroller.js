app.controller("retreiveitemlistcontroller", function ($scope, retrieveitemlistfactory) {
    console.log("itemlist controller");
    // $scope.Sendtype = function (type) {
    //     console.log("type : ", type);
        //console.log("controller");
        var promise = retrieveitemlistfactory.callServer();
        promise.then(function (data) {
              console.log("controller success : ",data);
            $scope.data = data;
        }, function (err) {
            //$scope.err = err;
            console.log("controller reject : ", err);
        });
   // }
})