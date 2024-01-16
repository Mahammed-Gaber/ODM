const mongoose = require('mongoose');
const empSchema = mongoose.Schema({

    name: String,
    job: String,
    address: {
        street: String,
        stnum: Number
    }

}, {
    strict: false
})

const Emp = mongoose.model('Emp', empSchema);

module.exports = Emp;