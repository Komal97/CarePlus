app.controller("myctrl", function ($scope, myfactory, $localStorage) {
    $scope.isDisabled = true;
    console.log($localStorage.message);
    if ($localStorage.message) {
        $scope.login = $localStorage.message;
    }

    $scope.doLogin = function () {
        $('#myModal').modal('hide');
        var userobject = new loginuser($scope.loginid, $scope.loginpassword);
        var promise = myfactory.doLogin(userobject);
        promise.then(function (data) {
            console.log("sucess", data.data.message);
            $scope.signup = " ";
            $localStorage.message = data.data.message;
            $scope.login = $localStorage.message;
        }, function (err) {
            console.log(err);
        })
    },
        $scope.doRegister = function () {
            var userobject1 = new user($scope.firstname, $scope.lastname, $scope.userid, $scope.mobile, $scope.password);
            var promise = myfactory.doRegister(userobject1);
            promise.then(function (data) {
                console.log("Back to promise...", data);
                $scope.signup = " ";
                $scope.login = data.data.message;
            }, function (err) {
                console.log(err);
            });

            $('#myModalRegister').modal('hide');
        },

        $scope.showcart = function () {
            var userobject = new accountuser($scope.login);
            var promise = myfactory.showcart(userobject);
            promise.then(function (data) {
                console.log("Back to promise...", data);
                $scope.data = data;
            }, function (err) {
                console.log("error ", err);
            });
        },

        $scope.editprofile = function () {
            var userobject2 = new accountuser($scope.login);
            console.log($scope.loginid);
            var promise = myfactory.editprofile(userobject2);
            promise.then(function (data) {
                console.log("Back to promise...", data);
                console.log(data.data);
                $scope.fname = data.data[0].firstname;
                $scope.lname = data.data[0].lastname;
                $scope.email = data.data[0].userid;
                $scope.mobile = data.data[0].mobile;
            }, function (err) {
                console.log("error ", err);
            });
        },

        $scope.edit = function () {
            console.log("you clicked edit");
            $scope.isDisabled = false;
        },

        $scope.save = function () {
            console.log("Scope is ", $scope.name1, $scope.lname);
            $scope.isDisabled = true;
            var userobject = new edituser(this.fname, this.lname, this.mobile, this.email);
            console.log(userobject);
            var promise = myfactory.save(userobject);
            promise.then(function (data) {
                console.log("save success", data);
            }, function (err) {
                console.log(err);
            })
        },

        $scope.myorders = function () {
            var userobject3 = new accountuser($scope.login);
            var promise = myfactory.myorders(userobject3);
            promise.then(function (data) {
                console.log(data.data);
                $scope.data = data;
            }, function (err) {
                console.log("error ", err);
            });
        }

    $scope.confirmpass = function () {
        var currentpassword = angular.element(document.querySelector("#currentpassword").value);
        var newpassword = angular.element(document.querySelector("#newpassword").value);
        var confirmpassword = angular.element(document.querySelector("#confirmpassword").value);
        if (angular.equals(newpassword, confirmpassword)) {
            console.log("equal");
            var confirmobject = new confirmpasswordclass($scope.login, currentpassword.selector);
            console.log(confirmobject);
            var promise = myfactory.confirmpass(confirmobject);
            promise.then(function (data) {
                console.log(data.data);
            }, function (err) {
                console.log("error ", err);
            })
        }
        else {
            $scope.confirm = "password does not match";
        }
    }
})