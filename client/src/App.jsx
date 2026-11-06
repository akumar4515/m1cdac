import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home.jsx'
import { Dashboard } from './Dashboard.jsx'
import Footer from './components/Footer.jsx'
import Login from './login.jsx'
import Register from './Registration.jsx'
import { Navbar } from './components/Navbar.jsx'
export const App=()=>{

    return(
        <Router>
             <Navbar/>
            <Routes>
               
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/dashboard/:id' element={<Dashboard/>}/>
            </Routes>
            
            <Footer/>
        </Router>

    )
}