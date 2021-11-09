const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
})

const Signup = mongoose.model("signupUserData",signupSchema)

module.exports=Signup