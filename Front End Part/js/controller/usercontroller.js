app.controller("myctrl", function ($scope, $rootScope, myfactory, $localStorage, $location, $timeout) {
    $scope.isDisabled = true;

    console.log($localStorage.message);
    if ($localStorage.message) {
        $scope.login = $localStorage.message;
        $scope.enablelogin = $localStorage.enablelogin;
    }

    var userobject = new accountuser($scope.login);
    var promise = myfactory.showcart(userobject);
    promise.then(function (data) {
        console.log("Back to promise...", data);
        console.log(data.data.length);
        if(data.data.length==0 && !$scope.placeorder){
            $scope.placeorder=!$scope.placeorder;
        }
        $scope.cartcount = data.data.length;
        $rootScope.countitem = data.data.length;
        var sum = 0;
        for (var key in data.data) {
            sum = sum + (data.data[key].price * data.data[key].buyquantity);
        }
        $scope.totalpricecart = sum;
        $scope.finaltotal = sum + 50;
        $scope.data = data;
    }, function (err) {
        console.log("error ", err);
    });

    $scope.doLogin = function () {
        var userobject = new loginuser($scope.loginid, $scope.loginpassword);
        var promise = myfactory.doLogin(userobject);
        promise.then(function (data) {
            console.log("sucess", data.data.message);
            if (data.data.message == "Invalid Userid or Password") {
                $scope.invalidpassword = data.data.message;
            } else {

                $scope.enablelogin = !($scope.enablelogin);
                $localStorage.enablelogin = $scope.enablelogin;
                $localStorage.message = data.data.message;
                $scope.login = $localStorage.message;
                $scope.invalidpassword = " ";
                $scope.loginid = " ";
                $scope.loginpassword = " ";
                $('#myModal').modal('hide');
            }
        }, function (err) {
            console.log(err);
        });

    },

        $scope.doRegister = function () {
            $scope.formsubmit = function (form) {
                if (form.$valid) {
                    var userobject2 = new accountuser($scope.userid);
                    var promise = myfactory.checkuserexist(userobject2);
                    promise.then(function (data) {
                        if (data.data.message == "User does not exists") {
                            var userobject1 = new user($scope.firstname, $scope.lastname, $scope.userid, $scope.mobile, $scope.password);
                            console.log(userobject1);
                            var promise = myfactory.doRegister(userobject1);
                            promise.then(function (data) {
                                $scope.signup = " ";
                                $scope.enablelogin = !($scope.enablelogin);
                                $localStorage.enablelogin = $scope.enablelogin;
                                $localStorage.message = data.data.message;
                                $scope.login = $localStorage.message;
                            }, function (err) {
                                console.log(err);
                            });

                            $('#myModalRegister').modal('hide');
                        }
                        else {
                            $scope.valid_user = "User already exists";
                        }

                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }

    $scope.editprofile = function () {
        if ($localStorage.message) {
            $location.path('/myprofile');
            var userobject2 = new accountuser($scope.login);
            var promise = myfactory.editprofile(userobject2);
            promise.then(function (data) {
                console.log(data.data);
                $scope.fname = data.data[0].firstname;
                $scope.lname = data.data[0].lastname;
                $scope.email = data.data[0].userid;
                $scope.mobile = data.data[0].mobile;
            }, function (err) {
                console.log("error ", err);
            });
        }
        else {
            $('#myModal').modal('show');
        }
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
            if ($localStorage.message) {
                $location.path('/orderhistory');
                var userobject3 = new accountuser($scope.login);
                var promise = myfactory.myorders(userobject3);
                promise.then(function (data) {
                    console.log(data.data);
                    $scope.data = data;
                }, function (err) {
                    console.log("error ", err);
                });
            } else {
                $('#myModal').modal('show');
            }
        }

    $scope.confirmpass = function () {
        var currentpassword = angular.element(document.querySelector("#currentpassword").value);
        // console.log(currentpassword);
        var newpassword = angular.element(document.querySelector("#newpassword").value);
        //console.log(newpassword);
        var confirmpassword = angular.element(document.querySelector("#confirmpassword").value);
        //console.log(confirmpassword);
        if (angular.equals(newpassword, confirmpassword)) {
            $scope.confirm = " ";
            console.log("equal");
            var confirmobject = new confirmpasswordclass($scope.login, currentpassword.selector, newpassword.selector);
            console.log(confirmobject);
            var promise = myfactory.confirmpass(confirmobject);
            promise.then(function (data) {
                if (data.data.message == "Invalid Password") {
                    $scope.current = data.data.message;
                }
                else {
                    $scope.current = " ";
                    $scope.passchange = data.data.message;
                    $timeout(function () {
                        $location.path('/');
                    }, 3500);
                }
            }, function (err) {
                console.log("error ", err);
            })
        }
        else {
            $scope.confirm = "password does not match";
        }
    },

        $scope.logoutfunc = function () {
            $localStorage.$reset();
            $scope.enablelogin = !($scope.enablelogin);
            $scope.login = " ";
            $scope.fname = " ";
            $scope.lname = " ";
            $scope.email = " ";
            $scope.mobile = " ";
            $location.path('/');
        },

        $scope.fromaddressdb = function () {
            var addrobj2 = new accountuser($scope.login);
            var promise = myfactory.fromaddressdb(addrobj2);
            promise.then(function (data) {
                $scope.data = data;
                console.log(data.data);
            }, function (err) {
                console.log("error ", err);
            });
        }

    $scope.deleteitem = function ($event, items) {
        console.log("delete", items);
        var promise = myfactory.deleteitem(items);
        promise.then(function (data) {
            var promise = myfactory.showcart(userobject);
            promise.then(function (data) {
                console.log("Back to promise...", data);
                console.log(data.data.length);
                if(data.data.length==0 && !$scope.placeorder){
                    $scope.placeorder=!$scope.placeorder;
                }
                $scope.cartcount = data.data.length;
                $rootScope.countitem = data.data.length;
                var sum = 0;

                for (var key in data.data) {
                    sum = sum + (data.data[key].price * data.data[key].buyquantity);
                }
                $scope.totalpricecart = sum;
                $scope.finaltotal = sum + 50;
                $scope.data = data;
            }, function (err) {
                console.log("error ", err);
            });
        }, function (err) {
            console.log("error ", err);
        });
    },

        $scope.forgotpass = function () {
            $scope.forgot = !$scope.forgot;
            $scope.showidmsg = "bluecolor";
            $scope.registerid = "Enter your registered e-mail id";
        },

        $scope.showmsg = "modal-footer";
    $scope.forgotpassword = function () {
        $scope.showmsg = "modal-footer";
        var passobject = new accountuser($scope.loginid1);
        var promise = myfactory.forgotpassword(passobject);
        promise.then(function (data) {
            if (data.data.message == "User does not exist") {
                $scope.showidmsg = "redcolor";
                $scope.registerid = "User does not exist";
            }
            else {
                $scope.showmsg = "show-modal-footer";
                //   $scope.msg = "Password has been sent to your registered e-mail"
                $scope.msg = data.data.message;
                $timeout(function () {
                    $('#myModal').modal('hide');
                }, 9000);
            }
        }, function (err) {
            console.log("error ", err);
        });
    }
})