import React from "react";
import { Link } from "react-router-dom"
import FacebookLogo from "../assets/logo-facebook-png-46272.png"
import "../styles/Navbar.css";



function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
            <a href="https://www.freeiconspng.com/img/46272" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/find-us-on-facebook-logo-png-image-19.png" width="150" alt="Find us on Facebook Logo PNG Image" /></a>
            </div>
            <div className="rightSide">
                <Link className="link-item" to="/" >Home</Link>
                <Link className="link-item" to="/boy">Boy</Link>
                <Link className="link-item" to="/girl">Girl</Link>
                <Link className="link-item" to="/about">About</Link>
                <Link className="link-item" to="/contact">Contact</Link>
            </div>
            <div className="buttonSide">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Signup</button></Link>
            </div>
        </div>
    );
}

export default Navbar;