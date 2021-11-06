const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema({
    otp:{type:String},
    // expireAt: {
    //     type: Date,
    //     default: Date.now,
    //     index: { expires: '5m' },
    //   },
},{
    versionKey:false,
    timestamps:true
})

// otpSchema.index({ "expire_at": 1 });
const Otp = mongoose.model("otpUserData",otpSchema)

module.exports=Otp