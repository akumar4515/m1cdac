
import React from 'react';
import { useState, useEffect } from 'react';
import './css/dashboard.css';
import { useParams, useNavigate } from 'react-router-dom';
import API from './config/API';

export const Dashboard = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [student, setStudent] = useState(null);

    useEffect(() => {

        async function fetchStudentData() {
            try {
                const res = await API.get(`/dashboard/${id}`);
                setStudent(res.data.user);
            }
            catch (err) {
                console.log(err);
            }
        }

        if (id) {
            fetchStudentData();
        }

    }, [id]);

    return (
        <div className="dashboard">

            <div className="dashboard-header">
                <div>
                    <h1>Student Dashboard</h1>
                    <p>Welcome back, {student?.name}</p>
                </div>

                <div className="profile">
                    {student?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
            </div>

            <div className="student-card">

                <h2>Student Information</h2>

                <div className="student-details">

                    <div className="detail">
                        <label>Full Name</label>
                        <h3>{student?.name}</h3>
                    </div>

                    <div className="detail">
                        <label>Email Address</label>
                        <h3>{student?.email}</h3>
                    </div>

                    <div className="detail">
                        <label>Roll Number</label>
                        <h3>{student?.roll_no}</h3>
                    </div>

                    <div className="detail">
                        <label>Course</label>
                        <h3>{student?.course}</h3>
                    </div>

                    <div className="detail">
                        <label>Academic Session</label>
                        <h3>{student?.session}</h3>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;
