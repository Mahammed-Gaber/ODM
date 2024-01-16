const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 10

    },
    age: Number,
    address: String,
    date: Date,
})



const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
