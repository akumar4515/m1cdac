function Footer() {

    return (

        <footer id="contact" style={{
            backgroundColor: "#118AB2",
            color: "white",
            padding: "40px"
        }}>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "25px"
            }}>

                <div style={{ width: "250px" }}>
                    <h2>CampusConnect</h2>

                    <p style={{ color: "white", marginTop: "15px" }}>
                        Your one-stop platform for college-related
                        information and student support.
                    </p>
                </div>


                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Our Features</p>
                    <p>Contact Us</p>
                </div>


                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h3>Useful Links</h3>
                    <p>College Forms</p>
                    <p>Scholarships</p>
                    <p>Study Materials</p>
                </div>


                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h3>Contact</h3>
                    <p>Email: campusconnect@gmail.com</p>
                    <p>Address: Nehru Marg, Bailey Road, Patna – 800001 </p>
                </div>

            </div>


            <p style={{ textAlign: "center", color: "white", marginTop: '25px' }}>
                © 2026 CampusConnect. All Rights Reserved.
            </p>

        </footer>

    );

}

export default Footer;