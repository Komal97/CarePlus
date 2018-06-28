app.factory("myfactory",function($http,$q,URL,URLR){
    const object={
        doLogin(userobject){
            var defer=$q.defer();
            console.log(userobject);
            $http.post(URL,userobject).then(function(data){
                console.log("Success",data);
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        },
        doRegister(userobject){
            var defer=$q.defer();
            $http.post(URLR,userobject).then(function(data){
                console.log("Success",data);
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})