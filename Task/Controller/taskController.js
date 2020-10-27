const router = require("express").Router();
const taskModel=require("../Model/taskModel.js")

router.post("/saveTask",async(req,res)=>{
    console.log("11",req.body)
    try{
        let data=await taskModel.createTask(req.body)
        console.log("data:",data)
        if(data){
            res.status(200).send(data)
        }

    }catch(error)
    {
        res.send(error)
    }
})

router.get("/getTodolist",async(req,res)=>{
    try{
        let data=await taskModel.viewTodoList(req.body)
        if(data){
            res.status(200).send(data)
        }

    }catch(error)
    {
        res.send(error)
    }
})

router.put("/updateTodoList",async(req,res)=>{
    try{
        let data=await taskModel.update(req.body)
        if(data.nModified == 1){
            res.status(200).send({message:"Data Updated"})
        }
        else{
            res.status(400).send({message:"Data Not Updated"})
        }

    }catch(error)
    {
        res.send(error)
    }
})

router.delete("/delete",async(req,res)=>{
    try{
        let data=await taskModel.delete(req.body)
        console.log("delete data",data)
        if(data.deletedCount == 1){
            res.status(200).send({message:"Data Deleted Successfully"})
        }
        else{
            res.status(200).send({message:"Data Not deleted"})
        }

    }catch(error)
    {
        res.send(error)
    }
})

module.exports=router;