app.factory("myfactory",function($http,$q,URL,URLR,URLACCOUNT,URLSAVE,URLFROMCARTDB,
                                 MYORDERS,PASSWORD,FROMADDRESS,DELETEITEM,FORGOT,CHECKUSER){
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
        },
        confirmpass(confirmobject){
            var defer=$q.defer();
            $http.post(PASSWORD,confirmobject).then(function(data){
                defer.resolve(data);
            },function(err){
                defer.reject(err);
            });
            return defer.promise;
        },
        fromaddressdb(addrobj2){
            var defer=$q.defer();
            $http.post(FROMADDRESS,addrobj2).then(function(data){
                console.log("sucess",data);
                defer.resolve(data);
            },function(err){
                defer.reject(err);
            });
            return defer.promise;
        },
        deleteitem(deleteobj){
            var defer=$q.defer();
            $http.post(DELETEITEM,deleteobj).then(function(data){
                console.log("sucess",data);
                defer.resolve(data);
            },function(err){
                defer.reject(err);
            });
            return defer.promise;
        },
        forgotpassword(passobject){
            var defer=$q.defer();
            $http.post(FORGOT,passobject).then(function(data){
                console.log("sucess",data);
                defer.resolve(data);
            },function(err){
                defer.reject(err);
            });
            return defer.promise;
        },
        checkuserexist(userobject){
            var defer=$q.defer();
            $http.post(CHECKUSER,userobject).then(function(data){
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