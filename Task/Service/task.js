const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    task:{
        type:String
    },
    status:{
        type:String,
        enum:["todo","complete"],
        default:"todo"
    }
})

module.exports=mongoose.model("Task",schema)