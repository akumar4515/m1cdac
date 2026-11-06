import Footer from './components/Footer'
import {Navbar} from './components/Navbar'
import heroImage from "./assets/hero.jpeg";
import { useNavigate } from 'react-router-dom';
export const Home=()=>{
    const navigate=useNavigate();

    return(
        <div>
            <div>
             <div id="home" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "60px 50px",
                backgroundColor: "#118AB2"
                , marginTop: '0px'
            }}>

                <div style={{ width: "50%" }}>

                    <h1 style={{ fontSize: "48px", color: "white" }}>
                        One Platform. Every Campus Need.
                    </h1>

                    <p style={{ fontSize: "19px", color: "white", lineHeight: "2.5" }}>
                        Connect, Learn and Grow with CampusConnect.
                        Your college life, academic resources, guidance and opportunities — all in one place.

                    </p>

                    <button style={{
                        padding: "12px 25px",
                        backgroundColor: "white",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "20px"
                    }} onClick={()=>navigate('/login')}>
                        Get Started
                    </button>

                </div>

                <div style={{ width: "40%" }}>

                    <img
                        src={heroImage}
                        alt="CampusConnectMainImg"
                        style={{
                            width: "100%",
                            borderRadius: "15px"
                        }}
                    />

                </div>

            </div>


            <div id="about" style={{
                padding: "50px",
                textAlign: "center"
                , marginTop: '40px'
            }}>

                <h1>About CampusConnect</h1>

                <p style={{ marginTop: "35px", fontSize: '25px' }}>
                    CampusConnect is a platform that brings students, faculty, seniors, alumni and colleges together in one place. It helps students access study materials, previous year questions, college updates, scholarship information and career opportunities. Students can ask questions, get guidance from teachers and seniors, share knowledge and connect with their college community. Faculty can share educational resources and announcements, while seniors and alumni can guide juniors through their experiences. Our goal is to make college life easier, more connected and more informative by bringing everything students need onto one platform.
                </p>

                <p style={{ marginTop: "20px", fontSize: '25px' }}>
                    Our platform provides all these useful
                    resources at one place.
                </p>

            </div>

            <div id="features" style={{
                padding: "50px",
                backgroundColor: "#f1f5f9",
                textAlign: "center"
            }}>

                <h1>Our Features</h1>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "30px"
                }}>

                    <div style={{ backgroundColor: "white", padding: "25px", width: "220px", borderRadius: "10px" }}>
                        <h3>Scholarships & Career</h3>
                        <p>Explore scholarship information, internships, job opportunities and career guidance.
                        </p>
                        <button style={{
                            padding: "12px 25px",
                            backgroundColor: "#118AB2",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            marginTop: "20px"
                        }}>
                            Get Scholarship Details
                        </button>
                    </div>

                    <div style={{ backgroundColor: "white", padding: "25px", width: "220px", borderRadius: "10px" }}>
                        <h3>Student Community
                        </h3>
                        <p>Connect with classmates, share experiences and collaborate on projects.
                        </p>

                        <button style={{
                            padding: "12px 25px",
                            backgroundColor: "#118AB2",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            marginTop: "20px"
                        }}>
                            Join Student Community
                        </button>
                    </div>

                    <div style={{ backgroundColor: "white", padding: "25px", width: "220px", borderRadius: "10px" }}>
                        <h3>Study Materials</h3>
                        <p>Access notes, previous year question papers and practical to make your learning easier and preparation better.</p>

                        <button style={{
                            padding: "12px 25px",
                            backgroundColor: "#118AB2",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            marginTop: "20px"
                        }}>
                            Access Study Material
                        </button>
                    </div>

                    <div style={{ backgroundColor: "white", padding: "25px", width: "220px", borderRadius: "10px" }}>
                        <h3>Exam Updates</h3>
                        <p>Stay informed about examination schedules, admit cards, results and other important announcements.</p>

                        <button style={{
                            padding: "12px 25px",
                            backgroundColor: "#118AB2",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            marginTop: "20px"
                        }}>
                            Get Examination Updates
                        </button>
                    </div>

                    <div style={{ backgroundColor: "white", padding: "25px", width: "220px", borderRadius: "10px" }}>
                        <h3>Senior & Faculty Connect
                        </h3>
                        <p>Get guidance from seniors and teachers to make better academic and career decisions.</p>

                        <button style={{
                            padding: "12px 25px",
                            backgroundColor: "#118AB2",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            marginTop: "20px"
                        }}>
                            Connect With Senior's
                        </button>
                    </div>



                </div>

            </div>

        </div>

        </div>
    )
}