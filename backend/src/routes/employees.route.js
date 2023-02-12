const {Router} = require('express');

const router = Router();

const {
    getEmployee,
    getEmployees,
    addEmployee,
    editEmployee,
    deleteEmployee
} = require('../controllers/employee.controller');

router.route('/')
    .get(getEmployees)
    .post(addEmployee)

router.route('/:id')
    .get(getEmployee)
    .put(editEmployee)
    .delete(deleteEmployee)


module.exports = router;