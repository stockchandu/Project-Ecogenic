// const dotenv = require("dotenv");
// dotenv.config({path:__dirname+"/config.env"});
const express = require("express");
const connect = require("./src/config/db.config")
const cors = require("cors")
const app =express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const userSignup = require("./src/controller/signup.controller");
app.use("/signup",userSignup);

const userOtp = require("./src/controller/otp.controller");
app.use("/otp",userOtp);

const resendOtp = require("./src/controller/resendotp.controller");
app.use("/resendotp",resendOtp);

app.use("/payment",require("./src/controller/payment.controller"));

app.listen(2325,async()=>{
    await connect();
    console.log("the port is running on 2325");
})


