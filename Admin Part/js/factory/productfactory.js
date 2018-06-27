app.factory("myfactory",function($http,$q,PRODUCTURL){
    const object={
        addproduct(productobject){
            console.log("factory");
            var defer=$q.defer();
            $http.post(PRODUCTURL,productobject).then(function(data){
                console.log("Success",data);
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
});