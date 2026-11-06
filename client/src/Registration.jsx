
import { Link, useNavigate } from 'react-router-dom';
import './css/auth.css';
import { useState } from 'react';
import API from './config/API';

export const Register = () => {

    const [student, setStudent] = useState({
        name: '',
        email: '',
        roll_no: '',
        password: '',
        confirmPassword: "",
        course: '',
        session: ''
    });

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (student.password !== student.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const { confirmPassword, ...registerData } = student;

            const response = await API.post('/register', registerData);

            if (response.data.success) {
                console.log("Registration successful");
                navigate('/login');
            }

        } catch (error) {
            console.error(
                "Registration failed:",
                error.response?.data || error.message
            );

            setError(
                error.response?.data?.message || "Registration failed. Please try again."
            );
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-form-container">

                <h2>Student Registration</h2>

                <p className="auth-subtitle">
                    Create your Campus Connect account
                </p>

                <form onSubmit={handleRegister}>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" value={student.name} onChange={(e) => setStudent({...student, name: e.target.value})} required />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={student.email} onChange={(e) => setStudent({...student, email: e.target.value})} required />
                    </div>

                    <div className="form-group">
                        <label>Roll Number</label>
                        <input type="text" value={student.roll_no} onChange={(e) => setStudent({...student, roll_no: e.target.value})} required />
                    </div>

                    <div className="form-group">
                        <label>Course</label>
                        <input type="text" value={student.course} onChange={(e) => setStudent({...student, course: e.target.value})} required />
                    </div>

                    <div className="form-group">
                        <label>Academic Session</label>
                        <input type="text" value={student.session} onChange={(e) => setStudent({...student, session: e.target.value})} required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={student.password} onChange={(e) => setStudent({...student, password: e.target.value})} placeholder="Enter password" required />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" value={student.confirmPassword} onChange={(e) => setStudent({...student, confirmPassword: e.target.value})} placeholder="Confirm password" required />
                    </div>

                    <button type="submit" className="auth-submit">
                        Register
                    </button>

                    {error && (
                        <p style={{
                            color: 'red',
                            textAlign: 'center',
                            marginTop: '12px'
                        }}>
                            {error}
                        </p>
                    )}

                </form>

                <p className="auth-switch">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </div>

        </div>
    );
};

export default Register;
