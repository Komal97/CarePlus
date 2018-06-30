app.controller("myctrl",function($scope,myfactory){
    $scope.doLogin=function(){
       // console.log("controller");
        var userobject=new loginuser($scope.loginid,$scope.loginpassword);
        var promise=myfactory.doLogin(userobject);
        promise.then(function(data){
        //    console.log("Back to promise...",data);
          //  $scope.message=data.data.message;
          console.log("sucess",data.data.message);
          $scope.signup=" ";
          $scope.login=data.data.message;
        },function(err){
           $scope.login=err;
        })
    },
    $scope.doRegister=function(){
       // console.log("controller");
        var userobject1=new user($scope.firstname,$scope.lastname,$scope.userid,$scope.mobile,$scope.password);
        var promise=myfactory.doRegister(userobject1);
        promise.then(function(data){
          //  console.log("Back to promise...",data);
          //  $scope.message=data.data.message;
          $scope.signup=" ";
          $scope.login=data.data.message;
        },function(err){
            $scope.login=err;
        })
    }
})