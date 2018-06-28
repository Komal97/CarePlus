app.factory("retrieveproductfactory",function($http,$q,URLPR){
    console.log("factory");
    var object = {
        callServer(){
            var defer = $q.defer();
            $http.get(URLPR).then(function(data){
                console.log(data);
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})