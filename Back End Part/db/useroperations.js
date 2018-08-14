const usercollection = require("./userschema");

const useroperations = {
    register(userobject, response) {
        usercollection.create(userobject, function (err) {
            if (err) {
                response.json({ message: 'Error Occured During registration' });
            }
            else {
                var object = { message: userobject.userid };
                response.json(object);
            }
        })
    },

    login(userobject, response) {
        usercollection.find({ userid: userobject.loginid, password: userobject.loginpassword },
            function (err, docs) {
                if (err) {
                    response.json({ message: 'Error Occured During Login' });
                }
                else {
                    if (docs && docs.length > 0){
                        var object = { message: userobject.loginid };
                        response.json(object);
                    }
                    else {
                        var object = { message: "Invalid Userid or Password" };
                        response.json(object);
                    }
                }
            })
    },
    editprofile(userobject, response) {
        usercollection.find({ userid: userobject.accountid },
            function (err, docs) {
                if (err) {
                    response.json({ message: 'Error' });
                }
                else {
                    response.json(docs);
                }
            })
    },
    checkuserexist(userobject, response) {
        usercollection.find({ userid: userobject.accountid },
            function (err, docs) {
                if (err) {
                    response.json({ message: 'Error' });
                }
                else {
                    if (docs && docs.length > 0){
                        response.json(docs);
                    }
                    else {
                        var object = { message: "User does not exists" };
                        response.json(object);
                    }
                }
            })
    },
    save(userobject, response) {
        usercollection.updateOne({ userid: userobject.email },
            {
                $set:
                    {
                        firstname: userobject.fname, lastname: userobject.lname,
                        mobile: userobject.mobile
                    }
            },
            function (err, result) {
                if (err) {
                    response.json({ message: 'Error during update' });
                }
                else {
                    response.json(result);
                }
            })
    },
    
    findconfirmpass(confirmpassobject, response) {
        usercollection.find({ userid: confirmpassobject.userid, password: confirmpassobject.password },
            function (err, docs) {
                if (err) {
                    response.json({ message: 'Error Occured During Change Password' });
                }
                else {
                    if (docs && docs.length > 0) {
                        // var object = { message:confirmpassobject.userid};
                        // response.json(object);
                        useroperations.confirmpass(confirmpassobject,response);
                    }
                    else {
                        var object = { message: "Invalid Password" };
                        response.json(object);
                    }
                }
            })
    },

    confirmpass(confirmpassobject, response) {
        usercollection.updateOne({ userid: confirmpassobject.userid},
            {
                $set:
                    { password: confirmpassobject.newpass }
            },
            function (err, result) {
                if (err) {
                    response.json({ message: 'Error during update' });
                }
                else {
                    console.log(confirmpassobject);
                    response.json({message:"Your password has been changed successfully "});
                }
            }) 
    },

    forgotpassword(userobject, response) {
        usercollection.find({ userid: userobject.accountid },
            function (err, docs) {
                if (err) {
                    response.json({ message: 'Error' });
                }
                else {
                    if (docs && docs.length > 0) {
                        //response.json({ message: "Password has been to your registered e-mail" });
                        const configmail = require("../utils/mail");
                        configmail(docs[0].userid, docs[0].password, response);
                    }
                    else {
                        response.json({ message: "User does not exist"});
                    }
                }
            })
    }
}
module.exports = useroperations;