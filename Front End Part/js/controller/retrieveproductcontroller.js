// app.controller("previewctrl",($scope)=>{
// console.log("Image path is in Preview... ",$scope.imgpath);
// });
app.controller("retrieveproductcontroller", function ($scope, $filter, $rootScope, $timeout, retrieveproductfactory, $location) {
  $scope.creditbtn = true;
  $scope.debitbtn = true;
  $scope.cashbtn = true;
  $scope.cvv1 = true;
  $scope.card1 = true;
  $scope.name1 = true;
  $scope.date1 = true;
  $scope.cvv2 = true;
  $scope.card2 = true;
  $scope.name2 = true;
  $scope.date2 = true;
  $scope.enable1 = function () {
    if ($scope.creditbtn == true) {
      $scope.creditbtn = false;
      $scope.cvv1 = false;
      $scope.card1 = false;
      $scope.name1 = false;
      $scope.date1 = false;
    }
    if ($scope.debitbtn == false) {
      $scope.debitbtn = true;
      $scope.cvv2 = true;
      $scope.card2 = true;
      $scope.name2 = true;
      $scope.date2 = true;
    }
    if ($scope.cashbtn == false) {
      $scope.cashbtn = true;
    }
  };
  $scope.enable2 = function () {
    if ($scope.creditbtn == false) {
      $scope.creditbtn = true;
      $scope.cvv1 = true;
      $scope.card1 = true;
      $scope.name1 = true;
      $scope.date1 = true;
    }
    if ($scope.debitbtn == true) {
      $scope.debitbtn = false;
      $scope.cvv2 = false;
      $scope.card2 = false;
      $scope.name2 = false;
      $scope.date2 = false;
    }
    if ($scope.cashbtn == false) {
      $scope.cashbtn = true;
    }
  };
  $scope.enable3 = function () {
    if ($scope.creditbtn == false) {
      $scope.creditbtn = true;
      $scope.cvv1 = true;
      $scope.card1 = true;
      $scope.name1 = true;
      $scope.date1 = true;

    }
    if ($scope.debitbtn == false) {
      $scope.debitbtn = true;
      $scope.cvv2 = true;
      $scope.card2 = true;
      $scope.name2 = true;
      $scope.date2 = true;
    }
    if ($scope.cashbtn == true) {
      $scope.cashbtn = false;
    }
  };

  $scope.showdata = function ($event, items) {
    console.log("controller");

    var promise = retrieveproductfactory.showdata($event, items);
    promise.then(function (data) {
      $rootScope.imgpath = data.data[0].url;

      angular.element(document.querySelector('#prevname')).append('<p>' + data.data[0].name + '</p>');

      angular.element(document.querySelector('#prevprice')).append('<p>' + "Rs. " + data.data[0].price + '</p>');

      angular.element(document.querySelector('#prevdes')).append('<p>' + data.data[0].description + '</p>');

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

  $scope.payfunc = function () {
    var object = retrieveproductfactory.getobject();
    console.log(object);

    var promise = retrieveproductfactory.checkoutfunc(object);
    promise.then(function (data) {
      console.log("success", data);
    }, function (err) {
      console.log("error", err);
    });

    $rootScope.successpay = !$scope.successpay;
    $rootScope.blurred = !$scope.blurred;
    $timeout(function () {
      $rootScope.successpay = !$scope.successpay;
      $rootScope.blurred = !$scope.blurred;
      $location.path('/');
    }, 2000);

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

  var promise = retrieveproductfactory.callServer();
  promise.then(function (data) {
    $scope.data = data;
  }, function (err) {
    console.log("error", err);
  });
});