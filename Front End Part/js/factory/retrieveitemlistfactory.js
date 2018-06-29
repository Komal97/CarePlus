app.factory("retrieveitemlistfactory",function($http,$q,URLITEMLIST){
    var object = {
        callServer(){
            var defer = $q.defer();
            $http.get(URLITEMLIST).then(function(data){
                console.log("Factory success ",data);
                defer.resolve(data);
            },function(error){
                defer.reject("Factory reject ",error);
            });
            return defer.promise;
        }
    }
    return object;
})