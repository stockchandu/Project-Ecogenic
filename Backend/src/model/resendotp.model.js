const mongoose = require("mongoose");
const resendotpSchema = new mongoose.Schema({
    otp:{type:String},
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '10m' },
      },
},{
    versionKey:false,
    timestamps:true
})

resendotpSchema.index({ "expire_at": 1 },{ expireAfterSeconds: 300 });
const resendOtp = mongoose.model("otpUserData",resendotpSchema)

module.exports=resendOtp