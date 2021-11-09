const router = require("express").Router();
const resendOtp = require("../model/otp.model");
const transporter = require("../config/email.config");

router.post("/",async(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let otp = Math.floor(1000 + Math.random() * 9000);
    await resendOtp.create({otp});
    await transporter.sendMail({
        from: "support@ecogenic.com", 
        to: email, 
        subject: "ECOGENIC | OTP to Verify Email", 
        html:`             
           <div><img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/emailbanner3.png"/></div>
           <div style="text-align:center;margin-bottom: 1%;">Hello ${name} Below is your verification code to verify your email on Ecogenic. The verification code is valid for 10 minutes.</div>
           <div style="width:100%; text-align:center;font-weight: 600;">Your OTP is ${otp}</div>
           ` 
      });

      return res.status(200).send({otp})
})




module.exports = router