app.factory("myfactory",function($http,$q,URL,URLR,URLACCOUNT,URLSAVE,URLFROMCARTDB){
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
        },
        editprofile(userobject){
            var defer=$q.defer();
            $http.post(URLACCOUNT,userobject).then(function(data){
                console.log("Success",data);
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        },
        showcart(userobject){
            var defer=$q.defer();
            $http.post(URLFROMCARTDB,userobject).then(function(data){
                console.log("Success",data);
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        },
        save(userobject){
            var defer=$q.defer();
            $http.post(URLSAVE,userobject).then(function(data){
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