<<<<<<< HEAD
app.factory("myfactory",function($http,$q,URL,URLR,URLACCOUNT,URLSAVE,URLFROMCARTDB){
=======
app.factory("myfactory",function($http,$q,URL,URLR,URLACCOUNT,URLSAVE,MYORDERS){
>>>>>>> 0f03e7474af4fda020c03de3d61bea20c62185dd
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
        },
        myorders(userobject){
            var defer=$q.defer();
            $http.post(MYORDERS,userobject).then(function(data){
                console.log("sucess",data);
                defer.resolve(data);
            },function(err){
                defer.reject(err);
            });
            return defer.promise;
        }
    }
    return object;
})