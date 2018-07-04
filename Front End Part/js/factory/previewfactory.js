app.factory("myfactory",function($http,$q,URLPREVIEW){
    const object={
        showdata($event,items){
            var defer=$q.defer();
            console.log(items);
            $http.post(URLPREVIEW,items).then(function(data){
                console.log("Success",data);
                defer.resolve(data);
            },function(error){
                console.log("error",error);
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})