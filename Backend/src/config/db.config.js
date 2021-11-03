const mongoose = require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://ecogenic:1234@cluster0.uc86y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports=connect