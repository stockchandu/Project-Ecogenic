const router = require("express").Router();
const Otp = require("../model/otp.model");
const transporter = require("../config/email.config");

router.get("/",async(req,res)=>{
    let otp = await Otp.find().lean().exec();
    return res.status(200).send({otp});
});


module.exports=router