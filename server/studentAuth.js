
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { Student } = require('./models');

exports.Register = async (req, res) => {
    try {
        const { name, email, roll_no, course, session, password } = req.body;

        if (!name || !email || !roll_no || !course || !session || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const isStudent = await Student.findOne({
            $or: [{ email }, { roll_no }]
        });

        if (isStudent) {
            return res.status(400).json({
                success: false,
                message: "Email or roll number already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = await Student.create({
            name,
            email,
            roll_no,
            course,
            session,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "Student registered successfully",
            user: {
                _id: newStudent._id,
                name: newStudent.name,
                email: newStudent.email,
                roll_no: newStudent.roll_no,
                course: newStudent.course,
                session: newStudent.session
            }
        });

    } catch (err) {
        console.error("Registration Error:", err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const isStudent = await Student.findOne({ email });

        if (!isStudent) {
            return res.status(400).json({
                success: false,
                message: "Student does not exist"
            });
        }

        const isMatch = await bcrypt.compare(password, isStudent.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not configured");
        }

        const token = jwt.sign(
            { id: isStudent._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                _id: isStudent._id,
                name: isStudent.name,
                email: isStudent.email,
                roll_no: isStudent.roll_no,
                course: isStudent.course,
                session: isStudent.session
            }
        });

    } catch (err) {
        console.error("Login Error:", err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


exports.Dashboard = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        const user = await Student.findById(id).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Student does not exist"
            });
        }

        return res.status(200).json({
            success: true,
            user
        });

    } catch (err) {
        console.error("Dashboard Error:", err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
