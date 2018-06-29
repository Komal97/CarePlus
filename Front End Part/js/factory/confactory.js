app.factory("confactory",function($http,$q,URLC){
    console.log("con factory");
    var object = {
        callServer(){
            var defer = $q.defer();
            $http.get(URLC).then(function(data){
                console.log("success ",data);
                defer.resolve(data);
            },function(error){
                console.log("reject  ",error);                
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})