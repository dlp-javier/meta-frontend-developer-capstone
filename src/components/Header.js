import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Booking from "./Booking"
import bannerImage from "../images/restauranfood.jpg"


const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family owned Mediterraneran restaurant, focused on traditional recipes server whith a modern twist</p>
                    <Link to="/booking"><button>Reserve table</button></Link>
                </div>
                {/* Banner image */}
                <div className="banner-img">
                    <img src={bannerImage} alt="" />
                </div>

            </section>

        <Routes>
            <Route path="/booking" element={<Booking />}/>
        </Routes>
        </header>


    );
    
}

export default Header;