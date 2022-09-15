import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Boy from "./pages/Boy";
import Girl from "./pages/Girl";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import "./styles/App.css"
// Install and import React router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/boy" exact element={<Boy />} />
                    <Route path="/girl" exact element={<Girl />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/signup" exact element={<Signup />} />
                    <Route path="/contact" exact element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>

    );
}

export default App;