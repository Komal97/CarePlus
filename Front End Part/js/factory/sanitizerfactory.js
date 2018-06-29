app.factory("sanitizerfactory",function($http,$q,SANITIZERURL){
    console.log("factory");
    var object = {
        callServer(){
            var defer = $q.defer();
            $http.get(SANITIZERURL).then(function(data){
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