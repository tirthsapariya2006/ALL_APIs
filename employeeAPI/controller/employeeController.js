const employeeModel = require("../model/emoloyeeModel");

exports.addemployee = async (req,res) => {
    const employee = await new employeeModel(req.body);
    return res.status(200).send(employee)
}

exports.findemployee = async (req,res) => {
    const employee = await employeeModel.findById(req.params.id);
    return res.status(200).send(employee)
}

exports.updateemployee = async (req,res) => {
    const employee = await employeeModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    return res.status(200).send(employee)
}
exports.deleteemployee = async (req,res) => {
    const employee = await employeeModel.dindBydAndDelete(req.params.id)
    return res.staus(200).send("employee deleted")
}
