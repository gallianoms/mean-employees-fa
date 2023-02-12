const { model, Schema} = require('mongoose');

const employeeSchema = new Schema({
    name: {
        type: String, required: true
    },
    position: {
        type: String, required: true
    },
    office: {
        type: String, required: true
    },
    salary: {
        type: Number, required: true
    },
    created_at: {
        type: Date, 
        default: Date.now
    },
});

module.exports = model('Employee', employeeSchema);