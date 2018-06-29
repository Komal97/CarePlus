app.factory("retrieveproductfactory",function($http,$q,URLPR){
    var object = {
        callServer(){
            var defer = $q.defer();
            $http.get(URLPR).then(function(data){
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})