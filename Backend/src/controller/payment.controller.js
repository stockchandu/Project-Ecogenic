const router = require("express").Router();
const Razorpay = require("razorpay");


router.post("/orders",async(req,res)=>{
    try {
          const instance= new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options={
            amount:50000,
            currency:"INR",
            receipt:"receipt_order_74394"
        }

        const order = await instance.orders.create(options);

        if(!order)return res.status(500).send("some error occured");

        return res.status(200).send(order)
    }
    catch(err){
        res.status(500).send(err)

    }
})

module.exports=router