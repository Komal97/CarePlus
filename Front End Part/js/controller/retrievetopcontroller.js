app.controller("retrievetopcontroller", function ($scope,$filter, retrievetopfactory,$rootScope,retrieveproductfactory) {
        console.log("top controller");
        $scope.showdata = function ($event, items) {
            console.log("controller");
        
            var promise = retrieveproductfactory.showdata($event, items);
            promise.then(function (data) {
              $rootScope.imgpath = data.data[0].url;
              $rootScope.prevname=data.data[0].name;
              $rootScope.prevprice=data.data[0].price;
              $rootScope.prevdes=data.data[0].description;
        
            }, function (err) {
              console.log("error", err);
        
            });
            retrieveproductfactory.buynowfunc($event,items);
        };
       
        $scope.tocartdatabase = function ($event, items) {
            var userobject = new cartdata($scope.login, items.modalno, items.name, items.price, items.url, 1);
            var promise = retrieveproductfactory.tocartdatabase(userobject);
            promise.then(function (data) {
              console.log("back to promise", data);
            }, function (err) {
              console.log("error", err);
            });
          };

          $scope.buynowfunc = function ($event, items) {
            console.log(items);
            console.log($scope.login);
            console.log($filter('date')(new Date(), 'fullDate'));
            var date = $filter('date')(new Date(), 'fullDate');
            var d = new Date();
            var n = d.toString;
            console.log(n.length);
        
            var object = new buynowitems($scope.login, items.modalno, items.url, items.name, items.price, date);
            console.log(object);
            $rootScope.imgpath2 = object.imageurl;
            $rootScope.checkname = object.productname;
            $rootScope.checkprice = object.price;
            $rootScope.checkmodel = object.modelno;
            $rootScope.calcprice = object.price;
            $rootScope.checkquant = object.buy_quantity;
            $rootScope.totalprice = object.price + 50;
            retrieveproductfactory.buynowfunc($event, object);
          };
        var promise = retrievetopfactory.callServer();
        promise.then(function (data) {
            //console.log("top controller", data);
            $scope.data = data;
        }, function (err) {
            console.log("error", err);
        });
});