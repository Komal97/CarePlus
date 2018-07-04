app.factory("retrieveproductfactory", function ($http, $q, URLPR, URLPREVIEW,URLTOCART,BUY) {
    var object = {
        callServer() {
            var defer = $q.defer();
            $http.get(URLPR).then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        },
        showdata($event, items) {
            var defer = $q.defer();
            console.log("factory");
            $http.post(URLPREVIEW, items).then(function (data) {
                console.log("Success", data);
                defer.resolve(data);
            }, function (error) {
                console.log("error", error);
                defer.reject(error);
            });
            return defer.promise;
        }
        ,
        tocartdatabase(userobject) {
            var defer = $q.defer();
            $http.post(URLTOCART, userobject).then(function (data) {
                console.log("Success", data);
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        },
        buynowfunc($event,productobject){
            var defer=$q.defer();
            console.log("factory");
            $http.post(BUY,productobject).then(function(data){
                console.log("Success",data);
                defer.resolve(data);
            },function(error){
                console.log("error",error);
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})