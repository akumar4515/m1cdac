import {useNavigate} from 'react-router-dom'
import '../css/navbar.css'
export const Navbar=()=>{

    const navigate=useNavigate();

    return( 
        <nav className="navbar">
            <img src="/logo.png" alt="Logo" className="logo" height="100" width="100" />
            <ul className="nav-links">
                <li className="nav-item"><a cl href="/">Home</a></li>
                <li className="nav-item"><a href="/about">About Us</a></li>
                <li className="nav-item"><a href="/campus">Campus</a></li>
                <li className="nav-item"><a href="/faqs">Faqs</a></li>
                <li className="nav-item"><a href="/faculty">Faculty</a></li>
                <li className="nav-item"><a href="/course">Courses</a></li>
        
            </ul>

            <div className="auth-buttons">
                <button className="login-button" onClick={()=>navigate('/login')}>Login</button>
                <button className="register-button" onClick={()=>navigate('/register')}>Register</button>
            </div>
        </nav>
    )
}