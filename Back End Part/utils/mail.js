const nodemailer=require("nodemailer");

function configmail(userid,password,response){
    nodemailer.createTestAccount((err,account)=>{
        let transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'komal.bansal.2297@gmail.com',
                pass:'k1o9m9a7l'
            }
        });

        let mailOptions = {
            from:'komal.bansal.2297@gmail.com',
            to:userid,
            subject:"Care+ - Your password details",
            text:'Your password is '+password+'\nIf you wish to change your' +
                  'password,then go to My Account -> Change Password \nThank you !!',
                              
        };

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Mail not send error",error);
               // response.json({message:"cant't send mail,some error"});
            }
            console.log("mail send successfully");
           // response.send({message:"mail send successfully"});
        })
    })
}
module.exports=configmail;