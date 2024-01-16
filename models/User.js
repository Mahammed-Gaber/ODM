const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 15
    },
    password:{
        type : String
    },
    age: Number,
    email: String,
    date: {
        type: Date,
        default: Date.now
    },
})


const User = mongoose.model('User', userSchema);

module.exports = User;
