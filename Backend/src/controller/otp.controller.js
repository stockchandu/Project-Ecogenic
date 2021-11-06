const router = require("express").Router();
const Otp = require("../model/otp.model");

router.get("/",async(req,res)=>{
    let otp = await Otp.find().lean().exec();
    return res.status(200).send({otp});
});

module.exports=router