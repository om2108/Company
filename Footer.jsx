import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h2>About Us</h2>
                        <p>
                            Om College is dedicated to academic excellence, innovation, and community development.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Admissions</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="#">Library</a></li>
                            <li><a href="#">Student Portal</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h2>Contact Us</h2>
                        <p>Om College<br />123 College Road<br />City, State - 123456</p>
                        <p>Email: info@omcollege.edu</p>
                        <p>Phone: +91 12345 67890</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    © 2025 Om College. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
