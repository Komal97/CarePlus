app.factory("retriveitemlistfactory",function($http,$q,URLITEMLIST){
    console.log("factory");
    const object={
        callServer(type){
            var defer=$q.defer();
            $http.post(URLITEMLIST,type).then(function(data){
                console.log("Success",data);
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        },
    }
    return object;
})