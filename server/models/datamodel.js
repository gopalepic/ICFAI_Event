const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: String,
    branch: String,
    email: String,
    contact: String,
    teamName: String
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
