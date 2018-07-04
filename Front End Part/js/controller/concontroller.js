app.controller("concontroller", function ($scope, confactory,$rootScope,retrieveproductfactory) {
    $scope.showdata = function ($event, items) {
        console.log("controller");
    
        var promise = retrieveproductfactory.showdata($event, items);
        promise.then(function (data) {
          $rootScope.imgpath = data.data[0].url;
    
          angular.element(document.querySelector('#prevname')).append('<p>' + data.data[0].name + '</p>');
    
          angular.element(document.querySelector('#prevprice')).append('<p>' + "Rs. "+ data.data[0].price + '</p>');
    
          angular.element(document.querySelector('#prevdes')).append('<p>' + data.data[0].description + '</p>');
    
        }, function (err) {
          console.log("error", err);
    
        });
    };
    console.log("con controller");
    var promise = confactory.callServer();
    promise.then(function (data) {
        $scope.data = data;
    }, function (err) {
    });
});