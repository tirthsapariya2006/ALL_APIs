const taskModel = require("../model/taskModel")

exports.addtask = async (req,res)=>{
    const task = await new taskModel(req.body);
    return res.status(200).send(task);
}

exports.findtask = async (req,res) =>{
    const task = await taskModel.findById(req.params.id);
    return res.status(200).send(task);
}

exports.updatetask = async (req,res) => {
    const task = await taskModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(task)
}

exports.deletetask = async (req,res) => {
    const task = await taskModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("task deleted")
} 