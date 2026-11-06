
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './css/auth.css';
import API from './config/API.js';

export const Login = () => {
    const [student, setStudent] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await API.post('/login', student);

            if (response.data.success) {
                console.log("Login successful");

                sessionStorage.setItem('token', response.data.token);

                navigate(`/dashboard/${response.data.user._id}`);
            } else {
                setError(response.data.message || 'Login failed');
            }

        } catch (error) {
            setError(
                error.response?.data?.message || 'Something went wrong. Please try again.'
            );
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-form-container">

                <h2>Welcome Back!</h2>

                <p className="auth-subtitle">
                    Login to your Campus Connect account
                </p>

                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label>Email Address</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={student.email}
                            onChange={(e) => setStudent({...student, email: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={student.password}
                            onChange={(e) => setStudent({...student, password: e.target.value})}
                            required
                        />
                    </div>

                    <div className="auth-options">
                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="auth-submit">
                        Login
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
                    Don't have an account?
                    <Link to="/register">
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;
