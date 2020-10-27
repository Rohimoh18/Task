const Task=require("../Service/task.js")

let model={

    createTask:async function(data){
        console.log(data)
        try{
            let task = new Task(data);
            return await task.save();
           

        }
        catch(error){
            return error;

        }

    },

    viewTodoList:async function(data){
        try{
            let task=await Task.find({status:"todo"})
            return task;


        }
        catch(error){
            return error;

        }

    },

    update:async function(data){
        try{
            let task=Task.update({task:data.task},{$set:{status:"complete"}})
            return task;

        }
        catch(error){
            return error;

        }

    },

    delete:async function(data){
        try{
            let task=await Task.deleteOne({task:data.task})
            return task;

        }
        catch(error){
            return error;

        }

    },
}

module.exports = model;
