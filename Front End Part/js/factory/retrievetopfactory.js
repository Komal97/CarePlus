app.factory("retrievetopfactory",function($http,$q,URLTOP){
    console.log("factory");
    var object = {
        callServer(){
            var defer = $q.defer();
            $http.get(URLTOP).then(function(data){
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})