
const Employee = require('../models/employees');


async function getEmployees(req, res) {

   const employees = await Employee.find();

    res.json(employees);
};

async function getEmployee(req, res) {
    // console.log(req.params);

    const {id} = req.params;

    const oneEmployee = await Employee.findById(id);

    res.json(oneEmployee);
};

async function addEmployee(req, res) {
    // console.log(req.body);
    const { name, position, office, salary } = req.body;
    await new Employee({
        name, position, office, salary
    }).save();
    

    res.json({
        "message": "Created employee"
    });
};

async function editEmployee(req, res) {

    // console.log(req.body)
    // console.log(req.params)

    const {name, position, office, salary} = req.body;
    const {id} = req. params

    await Employee.findByIdAndUpdate(id, {
        name, position, office, salary
    });

    res.json({
        "message": "Updated employee"
    });
};

async function deleteEmployee(req, res) {

    const {id} = req.params;
    
    await Employee.findByIdAndDelete(id);

    res.json({
        "message": "Deleted employee"
    });
};

module.exports = { getEmployees, getEmployee, addEmployee, editEmployee, deleteEmployee }