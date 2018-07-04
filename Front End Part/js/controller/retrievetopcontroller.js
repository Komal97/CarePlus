app.controller("retrievetopcontroller", function ($scope, retrievetopfactory,$rootScope,retrieveproductfactory) {
        console.log("top controller");
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
        var promise = retrievetopfactory.callServer();
        promise.then(function (data) {
            //console.log("top controller", data);
            $scope.data = data;
        }, function (err) {
            console.log("error", err);
        });
});