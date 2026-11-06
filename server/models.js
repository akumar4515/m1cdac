
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    roll_no: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = { Student, Admin };
