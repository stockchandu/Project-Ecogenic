const router = require("express").Router();
const Signup = require("../model/signup.model")

router.post("/",(req,res)=>{
       let name=req.body.name
       let  email=req.body.email
    let user = new Signup({
        name,
        email
    })
    user.save()
})

module.exports = router