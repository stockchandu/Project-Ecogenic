const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema({
    otp:{type:String},
    // expireAt: {
    //     type: new Date,
    //     default: Date.now,
    //     index: { expires: '10m' },
    //   },
},{
    versionKey:false,
    timestamps:true
})

// otpSchema.index({ "expire_at": 1 },{ expireAfterSeconds: 300 });
const Otp = mongoose.model("otpUserData",otpSchema)

module.exports=Otp